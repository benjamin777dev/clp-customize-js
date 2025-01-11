const container = document.getElementById('script-container');
if (!container) return;

container.parentNode.parentNode.style.overflowX = 'hidden';


// Fetch user data from localStorage
const userData = JSON.parse(localStorage.getItem('userInfo')) || {};
const firstName = userData.firstName || 'Congrats!';
const currentWeight = parseFloat(userData.currentWeight) || 230;
const targetWeight = parseFloat(userData.targetWeight) || 195;
const weightToLose = currentWeight - targetWeight;

// Calculate intermediate points for a smooth curve
const intermediate1 = currentWeight - (weightToLose * 0.35);
const intermediate2 = currentWeight - (weightToLose * 0.65);
const intermediate3 = currentWeight - (weightToLose * 0.85);

const currentDate = new Date();
const futureDate = new Date();
futureDate.setMonth(currentDate.getMonth() + 5);
const formattedDate = futureDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });

// Add Figtree font dynamically
const fontLink = document.createElement('link');
fontLink.href = 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700&display=swap';
fontLink.rel = 'stylesheet';
document.head.appendChild(fontLink);

// Add Chart.js dynamically
const chartScript = document.createElement('script');
chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
chartScript.onload = () => {
    // Inject HTML structure
    container.innerHTML = `
        <div style="padding: 2rem; max-width: 900px; margin: 0 auto; font-family: 'Figtree', sans-serif; color: #1A1F71;">
            <!-- Chart Section -->
            <h1 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.4; text-align: center; color: #1A1F71;">
                <span style="display: inline-block; background: linear-gradient(90deg, #FFB400, #FF4500); background-clip: text; -webkit-background-clip: text; color: transparent;">${firstName}</span>, 
                We can help you lose up to 
                <span id="animatedWeight" style="display: inline-block; background: linear-gradient(90deg, #FF4500, #FFB400); background-clip: text; -webkit-background-clip: text; color: transparent;">0</span> pounds 
                by ${formattedDate}!
            </h1>
            <div style="position: relative; height: 300px; width: 100%; margin-bottom: 2rem;">
                <canvas id="weightChart"></canvas>
            </div>
        </div>
    `;

    // Generate the chart
    const ctx = document.getElementById('weightChart').getContext('2d');
    const weightData = [currentWeight, intermediate1, intermediate2, intermediate3, targetWeight];
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['', '', '', '', ''],
            datasets: [
                {
                    label: 'Weight',
                    data: weightData,
                    borderColor: 'rgba(26, 31, 113, 0.9)',
                    backgroundColor: 'rgba(26, 31, 113, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    pointBackgroundColor: ['red', 'orange', 'gold', '#68B04A', '#3BA935'],
                    pointBorderColor: '#fff',
                    pointBorderWidth: 3,
                    pointRadius: [8, 8, 8, 8, 10],
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
            },
            scales: {
                x: { ticks: { display: false }, grid: { display: false } },
                y: { 
                    ticks: { display: false }, 
                    grid: { drawTicks: false, drawBorder: false, borderDash: [5, 5], color: '#E6E8F0' },
                    min: targetWeight - 10,
                    max: currentWeight + 5,
                },
            },
        },
    });

    // Animate the weight-to-lose counter
    const animatedWeight = document.getElementById('animatedWeight');
    let currentWeightValue = 0;
    const animationSpeed = 10;
    const step = weightToLose / 100;

    function animateWeight() {
        if (currentWeightValue < weightToLose) {
            currentWeightValue = Math.min(currentWeightValue + step, weightToLose);
            animatedWeight.textContent = Math.floor(currentWeightValue);
            requestAnimationFrame(animateWeight);
        }
    }

    animateWeight();
};
document.head.appendChild(chartScript);

// Add CSS for enhancements
const style = document.createElement('style');
style.innerHTML = `
    /* Flashing Bullet Points */
    @keyframes gradientFlash {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    .flashable {
        display: inline-block;
        background: linear-gradient(90deg, #FFB400, #FF4500, #FFB400);
        background-size: 200%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientFlash 1s linear infinite;
    }

    /* Testimonial Card Styles */
    .testimonial-card {
        background: linear-gradient(135deg, #ffffff, #f8f9fc);
        border: 1px solid #1A1F71;
        border-radius: 15px;
        padding: 2rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .testimonial-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
    }
    .testimonial-card h2 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #1A1F71;
        margin-bottom: 1rem;
    }
    .testimonial-card p {
        font-size: 0.9rem;
        color: #2C3E50;
        margin-bottom: 1rem;
    }
    .testimonial-card .user-info {
        font-size: 0.8rem;
        font-weight: 600;
        color: #1A1F71;
    }
    .testimonial-card .verified {
        color: #FFB400;
        font-weight: bold;
    }

    .pulsating-dot {
        display: block;
        width: 12px; /* Size of the dot */
        height: 12px;
        float:left;
        top: 2px;
        margin-right: 5px;
        background-color: #00c389; /* Green color */
        border-radius: 50%;
        position: relative; /* Necessary for positioning the pseudo-element */

    }

    .pulsating-dot::Before {
        content: ''; /* Required for pseudo-elements to render */
        position: absolute; /* Position relative to .pulsating-dot */
        top: 0;
        left: 0;
        width: 12px; /* Same size as the dot */
        height: 12px;
        background-color: #00c389; /* Green color */
        border-radius: 50%;
        animation: pulsate 1s infinite ease-in-out;
        opacity: 0.6; /* Optional: Slight transparency for better effect */
    }

    @keyframes pulsate {
        0% {
            transform: scale(1);
            opacity: 0.9;
        }
        50% {
            transform: scale(2);
            opacity: 0;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }

    .active-radio {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        float: left;
        border-right:1px solid #E1E5EC;
    }

    .active-radio > span{
        display: inline-block; 
        border-radius: 50%; 
        width: 20px; 
        height: 20px; 
        border: 2px solid #1A1F71
    }

    .active-radio > .active{
        background-color: #FFB400;
        border-color: #fff;
    }
`;

document.head.appendChild(style);
