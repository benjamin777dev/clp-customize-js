const container = document.getElementById('script-container');
if (!container) return;

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

            <!-- Info Section -->
            <h1 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.3; text-align: center;">
                Choose your medication to get started <span style="color: #FFB400;">TODAY</span>
            </h1>
            <ul style="list-style: none; padding: 0; margin: 0; max-width: 600px;">
                <li style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
                    <span style="color: #68B04A; font-size: 1.2rem; line-height: 1;">✔</span>
                    <span style="font-size: 1rem; font-weight: 600; line-height: 1.3;">
                        <span class="flashable">UNLIMITED</span> doctor calls 7 days a week
                    </span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
                    <span style="color: #68B04A; font-size: 1.2rem; line-height: 1;">✔</span>
                    <span style="font-size: 1rem; font-weight: 600; line-height: 1.3;">
                        Prescribed & shipped within <span class="flashable">48 HOURS</span>
                    </span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
                    <span style="color: #68B04A; font-size: 1.2rem; line-height: 1;">✔</span>
                    <span style="font-size: 1rem; font-weight: 600; line-height: 1.3;">
                        Cost of medicine <span class="flashable">INCLUDED</span> in price
                    </span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.4rem;">
                    <span style="color: #68B04A; font-size: 1.2rem; line-height: 1;">✔</span>
                    <span style="font-size: 1rem; font-weight: 600; line-height: 1.3;">
                        Price remains <span class="flashable">THE SAME</span> at all doses
                    </span>
                </li>
                <li style="display: flex; align-items: center; gap: 0.4rem;">
                    <span style="color: #68B04A; font-size: 1.2rem; line-height: 1;">✔</span>
                    <span style="font-size: 1rem; font-weight: 600; line-height: 1.3;">
                        No contracts, cancel <span class="flashable">ANYTIME</span>
                    </span>
                </li>
            </ul>

            <!-- Testimonials Section -->
            <div style="margin-top: 3rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem;">
                <!-- Testimonial Card 1 -->
                <div class="testimonial-card">
                    <h2>"Better relationship with food"</h2>
                    <p>
                        "The GLP-1 has helped me to lose 72 pounds in the past seven months. I’m no longer diabetic; I have my energy back, and the insane cravings for sugar and sweets are under control."
                    </p>
                    <p class="user-info">- Kandice, <span class="verified">Verified GLP-1 User ✔</span></p>
                </div>

                <!-- Testimonial Card 2 -->
                <div class="testimonial-card">
                    <h2>"GLP-1 gave me my life back"</h2>
                    <p>
                        "I have been using GLP-1 for a year and a half and have lost 79 pounds so far. My BMI was 39.9, on the limit for morbid obesity. Now my BMI is 27.3."
                    </p>
                    <p class="user-info">- Ariane, <span class="verified">Verified GLP-1 User ✔</span></p>
                </div>

                <!-- Testimonial Card 3 -->
                <div class="testimonial-card">
                    <h2>"Completely changed my life"</h2>
                    <p>
                        "I have been on a GLP-1 medication for 14 weeks and I’ve lost 28 pounds! It has completely changed my life! I have more energy than I’ve had in years."
                    </p>
                    <p class="user-info">- Jessica, <span class="verified">Verified GLP-1 User ✔</span></p>
                </div>
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


setTimeout(() => {
    const parentElement = document.querySelector('.flex.flex-wrap.justify-center.gap-2');

    if (parentElement) {
        const imgElements = parentElement.querySelectorAll('img');
        imgElements.forEach((img) => {
            const parentDivOfImg = img.parentNode;
            parentDivOfImg.style.height = '150px';
            parentDivOfImg.style.width = '150px';
            img.style.transform = 'scale(1.7)';
        });

        const btnElements = parentElement.querySelectorAll('button');
        btnElements.forEach((btn) => {
            let activeColor = '#FFB400';
            if (btn.className.includes('bg-[--selected-background-color]')) {
                activeColor = '#1A1F71';
            }

            btn.style.cssText = `
                border-radius: 7px;
                position: relative;
                padding-left: 40px;
                overflow: hidden;
                box-shadow: none;
                border: 2px solid #E1E5EC;
            `;

            const section = btn.querySelector('section');
            if (section) section.style.gap = '0';

            if (!btn.querySelector('.active-radio')) {
                const radioElements = document.createElement('div');
                radioElements.className = 'active-radio';
                radioElements.innerHTML = `<span></span>`;
                btn.appendChild(radioElements);
            }

            const titleElements = btn.querySelectorAll('h1');
            if (titleElements[0]) {
                titleElements[0].style.cssText = `
                    font-size: 1.5rem;
                    font-weight: 500;
                    font-family: "Lora", "Lora Fallback";
                    line-height: 1.1;
                    color: #1A1F71;                    
                `;
                titleElements[0].parentNode.style.flexWrap = 'wrap-reverse';
            }

            if (titleElements[1]) {
                titleElements[1].style.cssText = `
                    font-size: 1.5rem;
                    font-weight: 700;
                    margin-top: 7px;
                    color: #1A1F71;
                `;
            }

            const spanElements = btn.querySelectorAll('span');
            if (spanElements[0]) {
                spanElements[0].style.cssText = `
                    color: white;
                    font-weight: 700;
                    font-size: 12px;
                    background-color: ${activeColor};
                    padding: 15px 25px;
                    border-radius: 5px;
                    border-color: transparent;
                `;
            }

            const pElement = btn.querySelector('p');
            if (pElement) {
                pElement.style.cssText = `
                        display: flex; 
                        flex-wrap: wrap;
                        color: #1A1F71;
                    `;

                if (!pElement.querySelector('.pulsating-dot')) {
                    const InStock = document.createElement('span');
                    InStock.style.cssText = 'float: right; margin-left: auto;';
                    InStock.textContent = 'In Stock';

                    const pulsateSpan = document.createElement('span');
                    pulsateSpan.className = 'pulsating-dot';
                    InStock.appendChild(pulsateSpan);
                    pElement.appendChild(InStock);
                }
            }
        });

        btnElements.forEach((btn) => {
            btn.addEventListener('click', () => {
                btnElements.forEach((otherBtn) => {
                    const spanElement = otherBtn.querySelector('.active-radio span');
                    if (spanElement) {
                        otherBtn.style.borderColor = '#E1E5EC';
                        spanElement.parentNode.style.backgroundColor = 'transparent';
                        spanElement.classList.remove('active');
                    }
                });

                const clickedSpan = btn.querySelector('.active-radio span');
                if (clickedSpan) {
                    btn.style.borderColor = '#1A1F71';
                    clickedSpan.parentNode.style.backgroundColor = '#1A1F71';
                    clickedSpan.classList.add('active');
                }
            });
        });

        btnElements[0]?.click();
    } else {
        console.error('Parent element not found');
    }
}, 3000);
