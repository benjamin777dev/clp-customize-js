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

    // Add DataLabels plugin dynamically
    const datalabelsScript = document.createElement('script');
    datalabelsScript.src = 'https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels';
    datalabelsScript.onload = () => {

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



                <!-- landing Container -->
                <style>
                    .landing-container {
                        max-width: 800px;
                        width: 100%;
                    }

                    .landing-cta-button {
                        width: 100%;
                        padding: 20px;
                        background-color: #0a1172;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: 18px;
                        font-weight: bold;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        margin-bottom: 30px;
                        transition: background-color 0.3s;
                    }

                    .landing-cta-button:hover {
                        background-color: #080d5a;
                    }

                    .landing-arrow {
                        font-size: 20px;
                    }

                    .landing-stats-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 20px;
                    }

                    .landing-stat-card {
                        background: white;
                        padding: 20px;
                        border-radius: 12px;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
                    }

                    .landing-icon {
                        font-size: 24px;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: #f8f9fe;
                        border-radius: 50%;
                    }

                    .landing-stat-content {
                        flex: 1;
                    }

                    .landing-stat-value {
                        font-weight: bold;
                        font-size: 18px;
                        color: #333;
                    }

                    .landing-stat-label {
                        color: #666;
                        font-size: 14px;
                    }

                    @media (max-width: 768px) {
                        .landing-stats-grid {
                            grid-template-columns: 1fr;
                        }
                    }

                </style>

                
                <div class="landing-container">
                    <button class="landing-cta-button" id="scrollButton">
                        WOOHOO! CHOOSE MY MEDICATION
                        <span class="landing-arrow">→</span>
                    </button>

                    <div class="landing-stats-grid">
                        <div class="landing-stat-card">
                            <div class="landing-icon">👤</div>
                            <div class="landing-stat-content">
                                <div class="landing-stat-label">FREE overnight shipping to</div>
                                <div class="landing-stat-value">Alabama</div>
                            </div>
                        </div>

                        <div class="landing-stat-card">
                            <div class="landing-icon">📋</div>
                            <div class="landing-stat-content">
                                <div class="landing-stat-value">100,000+</div>
                                <div class="landing-stat-label">prescriptions written</div>
                            </div>
                        </div>

                        <div class="landing-stat-card">
                            <div class="landing-icon">⭐</div>
                            <div class="landing-stat-content">
                                <div class="landing-stat-value">98%</div>
                                <div class="landing-stat-label">success rate from the Remedy Meds program</div>
                            </div>
                        </div>

                        <div class="landing-stat-card">
                            <div class="landing-icon">🏆</div>
                            <div class="landing-stat-content">
                                <div class="landing-stat-label">Ranked</div>
                                <div class="landing-stat-value">#1 Weight Loss</div>
                                <div class="landing-stat-label">provider by Forbes</div>
                            </div>
                        </div>
                    </div>
                </div>




                
                <!-- Slider -->


                <style>
                    .slider-container {
                        position: absolute;
                        width: calc(100% + 2000px);
                        
                        margin: 2rem;
                        background: white;
                        border-radius: 1rem;
                        padding: 2rem;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
                        gap: 2rem;
                        margin-left: -1000px;
                        margin-right: -1000px;
                    }

                    .testimonials-wrapper {
                        overflow: hidden;
                        position: relative;
                        width: 100%;
                    }

                    .testimonials {
                        display: flex;
                        will-change: transform;
                    }

                    .testimonial-group {
                        /* display: grid; */
                        /* grid-template-columns: repeat(2, minmax(0, 1fr)); */
                        
                        display: flex;
                        gap: 1.5rem;
                        padding: 1rem;
                        /* flex: 0 0 50%; */
                    }

                    .testimonial-amimation-card {
                        /* background-color: #4a5568; */
                        background: white;
                        min-width: 400px;
                        max-width: 450px;
                        padding: 1.5rem;
                        border-radius: 0.5rem;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                    }

                    .rating {
                        margin-bottom: 0.5rem;
                    }

                    .star {
                        color: #00b67a;
                        font-size: 1.25rem;
                    }

                    .review-title {
                        font-size: 1.25rem;
                        color: #2d3748;
                        margin-bottom: 0.75rem;
                        font-weight: 600;
                    }

                    .text {
                        color: #4a5568;
                        margin-bottom: 1.5rem;
                        line-height: 1.5;
                        font-size: 0.95rem;
                    }

                    .user-info {
                        display: flex;
                        flex-direction: column;
                        gap: 0.5rem;
                    }

                    .user-details h3 {
                        font-size: 1rem;
                        color: #2d3748;
                        font-weight: 600;
                        margin-bottom: 0.25rem;
                    }

                    .verified {
                        color: #00b67a;
                        font-size: 0.875rem;
                        display: flex;
                        align-items: center;
                        gap: 0.25rem;
                    }

                    .verified::before {
                        content: "✓";
                        font-weight: bold;
                    }

                    .date-info {
                        font-size: 0.875rem;
                        color: #718096;
                    }

                    .date-info span {
                        font-weight: 500;
                    }

                    .weight-loss {
                        display: inline-flex;
                        align-items: center;
                        background: #ebf8ff;
                        color: #2b6cb0;
                        padding: 0.25rem 0.75rem;
                        border-radius: 9999px;
                        font-size: 0.875rem;
                        font-weight: 500;
                        margin-top: 0.5rem;
                    }

                    .left-to-right {
                        border-bottom: 2px solid #e5e7eb;
                        padding-bottom: 2rem;
                    }

                    @media (max-width: 768px) {
                        .testimonial-group {
                            grid-template-columns: 1fr;
                        }

                        .slider-container {
                            padding: 1rem;
                        }
                    }
                </style>



                <section style = 'position:relative; height:1340px'>
                    <div class="slider-container">
                    slider---------------------------------
                    </div>
                </section>


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

        // Chart data with dynamic styles
        const weightData = [
            { value: currentWeight, caption: 'Start: Current Weight', color: '#FF5733', fontSize: 14, bgColor: 'rgba(255,87,51,0.7)' },
            { value: intermediate1, caption: 'Phase 1: Steady Loss', color: '#FFC300', fontSize: 12, bgColor: 'rgba(255,195,0,0.7)' },
            { value: intermediate2, caption: 'Phase 2: Major Progress', color: '#DAF7A6', fontSize: 14, bgColor: 'rgba(218,247,166,0.7)' },
            { value: intermediate3, caption: 'Phase 3: Near Target', color: '#68B04A', fontSize: 16, bgColor: 'rgba(104,176,74,0.7)' },
            { value: targetWeight, caption: 'Goal Achieved!', color: '#1A1F71', fontSize: 18, bgColor: 'rgba(26,31,113,0.7)' },
        ];

        // Extract values for the chart
        const chartValues = weightData.map(data => data.value);

        // Generate the chart
        const ctx = document.getElementById('weightChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
            labels: ['', '', '', '', ''],
            datasets: [
                {
                label: 'Weight',
                data: chartValues,
                borderColor: 'rgba(26, 31, 113, 0.9)',
                backgroundColor: 'rgba(26, 31, 113, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                pointBackgroundColor: weightData.map(data => data.color),
                pointBorderColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: weightData.map((_, index) => (index === weightData.length - 1 ? 12 : 8)),
                },
            ],
            },
            options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                datalabels: {
                align: 'top',
                anchor: 'end',
                backgroundColor: context => {
                    const index = context.dataIndex;
                    return weightData[index].bgColor;
                },
                borderRadius: 10,
                color: context => {
                    const index = context.dataIndex;
                    return weightData[index].color;
                },
                font: context => {
                    const index = context.dataIndex;
                    return {
                    size: weightData[index].fontSize,
                    weight: 'bold',
                    };
                },
                padding: 6,
                formatter: (value, context) => {
                    const index = context.dataIndex;
                    return weightData[index].caption;
                },
                },
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
            plugins: [ChartDataLabels],
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
        {
            setTimeout(() => {
                updateRadioButton();
            }, 1000);

            const testimonialData = [
                {
                    name: "Christian T.",
                    date: "August 16, 2024",
                    rating: 5,
                    text: "The doctor's availability for checking and questions and all the techs have been extremely helpful. I would highly recommend Remedy Meds.",
                    lostWeight: "50lbs",
                    imageBefore: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
                    imageAfter: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=400&fit=crop",
                    isVerified: true
                },
                {
                    name: "Brenda W.",
                    date: "October 16, 2024",
                    rating: 5,
                    text: "Highly recommend! The support team has been amazing throughout my journey.",
                    lostWeight: "45lbs",
                    imageBefore: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=400&fit=crop",
                    imageAfter: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500&h=400&fit=crop",
                    isVerified: true
                }
            ];

            function createSliders() {
                const container = document.querySelector('.slider-container');
                container.innerHTML = `
                    <div class="testimonials-wrapper left-to-right">
                        <div class="testimonials">${createContent()}</div>
                    </div>
                    <div class="testimonials-wrapper right-to-left">
                        <div class="testimonials">${createContent()}</div>
                    </div>
                    <div class="testimonials-wrapper left-to-right2">
                        <div class="testimonials">${createContent()}</div>
                    </div>
                `;
            }

            function createContent() {
                return createTestimonialGroups() + createTestimonialGroups() + createTestimonialGroups();
            }

            function createTestimonialCard(data) {
                return `
            <div class="testimonial-amimation-card">
                <div class="rating">
                    ${'<span class="star">★</span>'.repeat(data.rating)}
                </div>
                <h2 class="review-title">Highly Recommend</h2>
                <p class="text">${data.text}</p>
                <div class="user-info">
                    <div class="user-details">
                        <h3>${data.name}</h3>
                        ${data.isVerified ? '<span class="verified">✓ Verified Buyer</span>' : ''}
                    </div>
                    <div class="date-info">
                        <span>Date of experience:</span> ${data.date}
                    </div>
                    ${data.lostWeight ? `<div class="weight-loss">lost ${data.lostWeight}</div>` : ''}
                </div>
            </div>
        `;
            }

            function createTestimonialGroups() {
                let groups = '';
                for (let i = 0; i < testimonialData.length; i += 2) {
                    groups += `
                <div class="testimonial-group">
                    ${createTestimonialCard(testimonialData[i])}
                    ${i + 1 < testimonialData.length ? createTestimonialCard(testimonialData[i + 1]) : ''}
                </div>
            `;
                }
                return groups;
            }

            createSliders();

            const leftToRight = document.querySelector('.left-to-right .testimonials');
            const leftToRight2 = document.querySelector('.left-to-right2 .testimonials');
            const rightToLeft = document.querySelector('.right-to-left .testimonials');

            let positionLTR = -(leftToRight.scrollWidth / 3);
            let positionLTR2 = -(leftToRight2.scrollWidth / 3);
            let positionRTL = 0;
            const speed = 0.5;

            function animate() {
                positionLTR += speed;
                positionLTR2 += speed;
                positionRTL -= speed;

                if (positionLTR >= 0) {
                    positionLTR = -(leftToRight.scrollWidth / 3);
                    positionLTR2 = -(leftToRight.scrollWidth / 3);
                }

                if (positionRTL <= -(rightToLeft.scrollWidth / 3)) {
                    positionRTL = 0;
                }

                leftToRight.style.transform = `translateX(${positionLTR}px)`;
                leftToRight2.style.transform = `translateX(${positionLTR2}px)`;
                rightToLeft.style.transform = `translateX(${positionRTL}px)`;

                requestAnimationFrame(animate);
            }

            animate();
        }
    }
    document.head.appendChild(datalabelsScript);

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



const updateRadioButton = () => {
    const parentElement = document.querySelector('.flex.flex-wrap.justify-center.gap-2');
    console.log('parentElement', parentElement)
    document.getElementById("scrollButton").addEventListener("click", function () {
        parentElement.scrollIntoView({ behavior: "smooth" });
    });
    
    if (parentElement) {
        const imgElements = parentElement.querySelectorAll('img');
        imgElements.forEach((img) => {
            const parentDivOfImg = img.parentNode;
            parentDivOfImg.style.height = '150px';
            parentDivOfImg.style.width = '150px';
            img.style.transform = 'scale(1.7)';
        });
    
        const btnElements = parentElement.querySelectorAll('button');
        console.log('btnElements', btnElements)
    
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
}