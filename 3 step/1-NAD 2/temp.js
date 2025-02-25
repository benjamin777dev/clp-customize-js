const container = document.getElementById('script-container');
// if (!container) return;

container.parentNode.parentNode.style.overflowX = 'hidden';


// Fetch user data from localStorage
const userData = JSON.parse(localStorage.getItem('userInfo')) || {};
const firstName = userData.firstName || '';
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
            <div style="max-width: 900px; margin: 0 auto; font-family: 'Figtree', sans-serif; color: #1A1F71;">
                <!-- Chart Section -->
                <h1 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.4; text-align: center; color: #1A1F71;">
                    <span style="display: inline-block; background: linear-gradient(90deg, #FFB400, #FF4500); background-clip: text; -webkit-background-clip: text; color: transparent;">Congrats ${firstName}!</span>
                    We can help you lose up to 
                    <span id="animatedWeight" style="display: inline-block; background: linear-gradient(90deg, #FF4500, #FFB400); background-clip: text; -webkit-background-clip: text; color: transparent;">0</span> pounds 
                    by ${formattedDate}!
                </h1>
                <div style="position: relative; height: 300px; width: 100%; margin-bottom: 2rem;border: 1px solid #E6E8F0; border-radius:5px;background-color:white; padding-left:10px">
                    <canvas id="weightChart"></canvas>
                </div>



                <!-- landing Container -->
                <style>
                    .text-accent {
                        color: hsl(36 97% 56% );
                    }
                    .border-accent {
                        border-color: hsl(36 97% 56% );
                    }
                    .landing-container {
                        max-width: 800px;
                        width: 100%;
                    }

                    .landing-cta-button {
                        width: 100%;
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        background-color: rgb(6, 32, 136);
                        color: rgb(255, 255, 255);
                        border: 2px solid rgb(6, 32, 136);
                        border-radius: 6px;
                        box-sizing: border-box;
                        cursor: pointer;
                        font-family: Figtree, "Figtree Fallback";
                        font-size: 14px;
                        font-weight: 600;
                        height: 56px;
                        line-height: 20px;
                        margin-bottom: 2rem;
                        overflow: hidden;
                        padding: 20px 40px;
                        position: relative;
                        text-align: center;
                        text-decoration: none;
                        transition: 
                            color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                            background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                            border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                            text-decoration-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                            fill 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                            stroke 0.15s cubic-bezier(0.4, 0, 0.2, 1);
                        -webkit-font-smoothing: antialiased;
                        -webkit-tap-highlight-color: transparent;
                        }

                    .landing-cta-button:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        width: 100%;
                        height: 100%;
                        background-image: linear-gradient(-45deg, rgba(255, 255, 255, 0) 30%, rgb(69, 151, 245) 50%, rgba(255, 255, 255, 0) 70%);
                        background-size: 200% 200%;
                        opacity: 0.5;
                        transform: translateZ(0); /* Improves animation performance */
                        animation: shine 3s infinite ease-out;
                        box-sizing: border-box;
                    }

                    @keyframes shine {
                        0% {
                            content: '';
                            background-position: 200% 0;
                        }
                        100% {
                            content: '';
                            background-position: -200% 0;
                        }
                    }

                    .landing-cta-button:hover {
                        background-color: #080d5a;
                    }
                </style>

                
                <div class="landing-container">
                    <button class="landing-cta-button" id="scrollButton">
                        WOOHOO! CHOOSE MY MEDICATION
                        <span class="landing-arrow">→</span>
                    </button>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <div class="overflow-hidden border border-input bg-white rounded p-3 flex lg:justify-center">
                            <div class="flex gap-4 justify-start items-center font-bold text-left leading-tight w-full">
                                <div class="flex gap-4 justify-start items-center flex-grow">
                                    <div
                                        class="flex items-center justify-center shrink-0 rounded-full size-10 [&amp;>svg]:size-7 bg-white text-foreground border border-accent text-accent" style="padding:6px">
                                        <svg width="24" height="24" viewBox="0 0 15 14" fill="none" class="text-accent">
                                            <path
                                                d="M9.726 8.92856C11.0029 6.92481 10.8424 7.1748 10.8792 7.12256C11.3441 6.46682 11.5898 5.69505 11.5898 4.89063C11.5898 2.75734 9.85873 1 7.72266 1C5.59355 1 3.85547 2.75388 3.85547 4.89063C3.85547 5.69453 4.10634 6.48651 4.58648 7.15108L5.71927 8.92858C4.50813 9.1147 2.44922 9.66934 2.44922 10.8906C2.44922 11.3358 2.7398 11.9703 4.12411 12.4647C5.09072 12.8099 6.3687 13 7.72266 13C10.2545 13 12.9961 12.2858 12.9961 10.8906C12.9961 9.66913 10.9396 9.11507 9.726 8.92856ZM5.1738 6.76434C5.16994 6.75829 5.16591 6.75238 5.16169 6.74657C4.76215 6.19691 4.55859 5.54549 4.55859 4.89063C4.55859 3.13239 5.97436 1.70312 7.72266 1.70312C9.46732 1.70312 10.8867 3.13302 10.8867 4.89063C10.8867 5.54655 10.687 6.17587 10.3091 6.71104C10.2752 6.75571 10.4519 6.48121 7.72266 10.7638L5.1738 6.76434ZM7.72266 12.2969C4.95717 12.2969 3.15234 11.484 3.15234 10.8906C3.15234 10.4918 4.07972 9.83605 6.13472 9.58045L7.42617 11.6069C7.49072 11.7082 7.60252 11.7695 7.72263 11.7695C7.84275 11.7695 7.95457 11.7082 8.01909 11.6069L9.31052 9.58045C11.3656 9.83605 12.293 10.4918 12.293 10.8906C12.293 11.479 10.5044 12.2969 7.72266 12.2969Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M7.73047 3.13281C6.76121 3.13281 5.97266 3.92137 5.97266 4.89062C5.97266 5.85988 6.76121 6.64844 7.73047 6.64844C8.69973 6.64844 9.48828 5.85988 9.48828 4.89062C9.48828 3.92137 8.69973 3.13281 7.73047 3.13281ZM7.73047 5.94531C7.14891 5.94531 6.67578 5.47218 6.67578 4.89062C6.67578 4.30907 7.14891 3.83594 7.73047 3.83594C8.31202 3.83594 8.78516 4.30907 8.78516 4.89062C8.78516 5.47218 8.31202 5.94531 7.73047 5.94531Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="font-semibold">FREE overnight shipping within <span
                                                class="text-accent text-xl font-bold"> 48 Hours</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="overflow-hidden border border-input bg-white rounded p-3 flex lg:justify-center">
                            <div class="flex gap-4 justify-start items-center font-bold text-left leading-tight w-full">
                                <div class="flex gap-4 justify-start items-center flex-grow">
                                    <div
                                        class="flex items-center justify-center shrink-0 rounded-full size-10 [&amp;>svg]:size-7 bg-white text-foreground border border-accent text-accent" style="padding:6px" >
                                        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" class="text-accent">
                                            <path
                                                d="M9.33203 12.6679H22.6654M13.7765 19.8901H18.2209M15.9987 17.6679V22.1123M21.5543 8.22298H10.4431C10.1485 8.22298 9.86584 8.34005 9.65747 8.54842C9.44909 8.75679 9.33203 9.03941 9.33203 9.33409V26.0008C9.33203 26.2954 9.44909 26.5781 9.65747 26.7864C9.86584 26.9948 10.1485 27.1119 10.4431 27.1119H21.5543C21.8489 27.1119 22.1316 26.9948 22.3399 26.7864C22.5483 26.5781 22.6654 26.2954 22.6654 26.0008V9.33409C22.6654 9.03941 22.5483 8.75679 22.3399 8.54842C22.1316 8.34005 21.8489 8.22298 21.5543 8.22298ZM20.4432 4.88965H11.5543V8.22298H20.4432V4.88965Z"
                                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                            </path>
                                        </svg>
                                    </div>
                                    <div>
                                        <div class="font-semibold"><span class="text-accent text-xl font-bold">100,000+</span>
                                            prescriptions written by our doctors</div>
                                    </div>
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
                        display: flex;
                        flex-direction: column;
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
                        background: white;
                        min-width: 320px;
                        max-width: 380px;
                        padding: 1.5rem;
                        border-radius: 0.5rem;
                        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                        display: flex;
                        flex-direction: column;
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
                        color: #080d5a;
                        margin-bottom: 0.75rem;
                        font-weight: 600;
                    }

                    .text {
                        color: #080d5a;
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
                        color: #080d5a;
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
                        background-color:#00b67a;
                        color:#fff;
                        border-radius:100%;
                        padding: 1px 4.5px;
                        font-size:10px;
                    }

                    .date-info {
                        font-size: 12px;
                        color: #080d5a;
                        display:flex;
                        align-items:center;
                        justify-content:space-between;
                    }

                    .date-info span {
                        font-weight: 500;
                    }

                    .weight-loss {
                        display: inline-flex;
                        align-items: center;
                        background:rgb(202, 232, 248);
                        color: #080d5a;
                        padding: 0.25rem 0.75rem;
                        border-radius: 9999px;
                        font-size: 1rem;
                        font-weight: 500;
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



                <section style = 'position:relative; height:1024px'>
                    <div class="slider-container">
                    </div>
                </section>


                <!-- Info Section -->
                <h1 style="font-size: 1.5rem; font-weight: 700; margin-top: 1.5rem; margin-bottom: 1.5rem; line-height: 1.3; text-align: center;"  id="scrollTargetPosition">
                    Choose your medication to get started <span style="color: #FFB400;">TODAY</span>
                </h1>
                <ul style="list-style: none; padding: 0; margin-bottom: 20px; max-width: 600px;">
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
            </div>
        `;

        const targetPostionElement = document.getElementById('scrollTargetPosition');
        document.getElementById("scrollButton").addEventListener("click", function () {
            targetPostionElement.scrollIntoView({ behavior: "smooth" });
        });


        // Chart data with dynamic styles
        const weightData = [
            { value: currentWeight, caption: '', color: '#FF5733', display:false, borderColor:'#FF5733'},
            { value: intermediate1, caption: 'Phase 1: Steady Loss', color: 'rgb(221, 65, 18)', fontSize: 16,borderColor:'#FFC300'},
            { value: intermediate2, caption: 'Phase 2: Major Progress', color: 'rgb(131, 121, 31)', fontSize: 17, borderColor:'rgb(176, 247, 166)'},
            { value: intermediate3, caption: 'Phase 3: Near Target', color: '#68B04A', fontSize: 18, borderColor:'#68B04A'},
            { value: targetWeight, caption: 'Goal Achieved!', color: 'white', fontSize: 20, bgColor: 'rgb(27, 153, 38)', borderColor:'rgb(27, 153, 38)'},
          ];
      
        // Extract values for the chart
        const chartValues = weightData.map(data => data.value);

        // Generate the chart
        const ctx = document.getElementById('weightChart').getContext('2d');

        // Create gradient for the border color
        const gradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
        gradient.addColorStop(0, 'rgb(255, 61, 17)');
        gradient.addColorStop(0.5, 'rgba(255,87,51,1)');
        gradient.addColorStop(0.8, 'rgba(255,195,0,1)');
        gradient.addColorStop(1, 'rgba(80, 186, 88, 1)');

        new Chart(ctx, {
            type: 'line',
            data: {
              labels: ['1ST MONTH', '2ND MONTH', '3RD MONTH', '4TH MONTH', '5TH MONTH'],
              datasets: [
                {
                  label: 'Weight',
                  data: chartValues,
                  borderColor: gradient,
                  backgroundColor: 'rgba(26, 31, 113, 0.1)',
                  borderWidth: 4,
                  tension: 0.4,
                  pointBackgroundColor: '#fff',
                  pointBorderColor: context => {
                      const index = context.dataIndex;
                      return weightData[index].borderColor??'#fff';
                  },
                  pointBorderWidth: 4,
                  pointRadius: weightData.map((_, index) => (index === weightData.length - 1 ? 12 : 8)),
                },
              ],
            },
            options: {
              layout: {
                  padding: {
                    top: 20,
                    left: 20,
                    right: 50,
                    bottom: 20,
                  },
              },
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                  title: {
                      display: true,
                      text: 'Your Weight (LBS)',
                      font: {
                        size: 13,
                        family: 'Arial',
                      },
                      color: '#1A1F71',
                      padding: {
                        top: 10,
                        bottom: 20,
                      },
                      align: 'center',
                    },
                legend: { display: false },
                datalabels: {
                  align: 'top',
                  anchor: 'end',
                  offset: context => {
                      const index = context.dataIndex;
                      return index === weightData.length - 1 ? 20 : 0;
                  },
                  display: context => {
                      const index = context.dataIndex;
                      return weightData[index].display;
                  },
                  backgroundColor: context => {
                    const index = context.dataIndex;
                    return weightData[index].bgColor;
                  },
                  borderColor: context => {
                      const index = context.dataIndex;
                      return weightData[index].borderColor;
                  },
                  borderRadius: 999,
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
                  padding: {
                      top: 20,
                      bottom: 18,
                      left:15,
                      right: 15,
                  },
                  formatter: (value, context) => {
                    const index = context.dataIndex;
                    const nodeValue = weightData[index].value;
                    return `${Math.round(nodeValue)}`;
                  },
                },
              },
              scales: {
                x: { ticks: { 
                  display: true,
                  color: 'rgba(26, 31, 113, 0.9)',
                  font: {
                      size: 11,
                      weight: 'bold',
                      family: 'Arial',
                  },
              
              }, grid: { display: false }, },
                y: {
                  ticks: { display: false },
                  grid: { drawTicks: false, drawBorder: false, borderDash: [5, 5], color: '#E6E8F0' },
                  min: targetWeight - 15,
                  max: currentWeight + 15,
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
                updateContinueButton();
            }, 1000);

            const testimonialData = [
                {
                    name: "Ariane B.",
                    date: "August 16, 2024",
                    rating: 5,
                    title:"GLP-1 gave me my life back",
                    text: "I have been using GLP-1 for a year and a half and have lost 79 pounds so far. My BMI was 39.9, on the limit for morbid obesity. Now my BMI is 27.3. GLP-1 gave me my life back.",
                    lostWeight: "79lbs",
                    image: "https://res.cloudinary.com/ddjyuqhhg/image/upload/v1736667011/Kandice_C_lost_72_lbs_f6feno.webp",
                    isVerified: true
                },
                {
                    name: "Caitlin T",
                    date: "October 16, 2024",
                    rating: 5,
                    title: "I’ve witnessed remarkable progress",
                    text: "I’ve lost an impressive 50 pounds. It’s been an incredible transformation, and I’m proud of the commitment I’ve shown to my well-being. <br> Over the last six months, I’ve been dedicated to my health journey with GLP-1, and I’m delighted to share that I’ve lost an impressive 50 pounds. It’s been an incredible transformation.",
                    lostWeight: "50lbs",
                    image: "https://res.cloudinary.com/ddjyuqhhg/image/upload/v1736667011/Kat_R_lost_28_lbs_gcv90m.webp",
                    isVerified: true
                },
                {
                    name: "Claudia C",
                    date: "October 16, 2024",
                    rating: 5,
                    title: "GLP-1 medication has been my greatest asset",
                    text: "I am down 52lbs and feel a weight has been lifted off my shoulders (literally). It’s been an incredible journey, and my only regret is not starting sooner. I will never regret improving my health.",
                    lostWeight: "52lbs",
                    image: "https://res.cloudinary.com/ddjyuqhhg/image/upload/v1736667011/Ariane_B_lost_79_lbs_b76msr.webp",
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
                `;
            }

            function createContent() {
                return createTestimonialGroups() + createTestimonialGroups() + createTestimonialGroups();
            }

            function createTestimonialCard(data) {
                return `
                    <div class="testimonial-amimation-card" style="padding:0; overflow:hidden">
                        <img src="${data.image}"/>
                        <div class="user-info p-6">
                            <div class="user-details">
                                <h3>${data.name}</h3>
                                ${data.isVerified ? '<span class="verified">Verified GLP1 User</span>' : ''}
                            </div>
                            <div class="date-info">
                                ${data.lostWeight ? `<div class="weight-loss">lost <span style="font-weight:700; margin-left:5px; font-size:1.15rem">${data.lostWeight}</span></div>` : ''}
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-amimation-card">
                        <div class="rating inline-flex gap-1">
                            ${'<span class="star inline-flex"><svg height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9893 0H0V19.9893H19.9893V0Z" fill="#00B67A"></path><path d="M13.0363 12.3284L9.99627 13.0988L14.3065 16.2429L13.0363 12.3284Z" fill="white"></path><path d="M11.6412 8.03898H16.9925L12.6823 11.1623L10.0171 13.078L5.68607 16.2013L7.33102 11.1623L3 8.03898H8.35131L9.99627 3L11.6412 8.03898Z" fill="white"></path></svg></span>'.repeat(data.rating)}
                        </div>
                        <h2 class="review-title">${data.title}</h2>
                        <p class="text" style="flex:1">${data.text}</p>

                        <div class="user-info">
                            <div class="user-details">
                                <h3>${data.name}</h3>
                                ${data.isVerified ? '<span class="verified">Verified GLP1 User</span>' : ''}
                            </div>
                            <div class="date-info">
                            </div>
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
            const rightToLeft = document.querySelector('.right-to-left .testimonials');

            let positionLTR = -(leftToRight.scrollWidth / 3);
            let positionRTL = 0;
            const speed = 0.5;

            function animate() {
                positionLTR += speed;
                positionRTL -= speed;

                if (positionLTR >= 0) {
                    positionLTR = -(leftToRight.scrollWidth / 3);
                }

                if (positionRTL <= -(rightToLeft.scrollWidth / 3)) {
                    positionRTL = 0;
                }

                leftToRight.style.transform = `translateX(${positionLTR}px)`;
                rightToLeft.style.transform = `translateX(${positionRTL}px)`;

                requestAnimationFrame(animate);
            }

            animate();
        }
    }
    document.head.appendChild(datalabelsScript);

};

const testimonialContainer = `
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
`

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
    // document.getElementById("scrollButton").addEventListener("click", function () {
    //     parentElement.scrollIntoView({ behavior: "smooth" });
    // });
    
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

                const oldInStock = titleElements[1].parentNode.querySelector('#inStock');
                if (!oldInStock) {
                    const inStock = document.createElement('span');
                    inStock.id = 'inStock';
                    inStock.style.cssText = `
                        float: right; 
                        margin-left: auto; 
                        color: #1A1F71; 
                        font-size: 12px;
                    `;
                    inStock.textContent = 'In-Stock';
            
                    const pulsateSpan = document.createElement('span');
                    pulsateSpan.className = 'pulsating-dot';
                    inStock.appendChild(pulsateSpan);
            
                    titleElements[1].parentNode.appendChild(inStock);
                }
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

        const newDiv = document.createElement('div');
        newDiv.id = 'testimonialContainer';
        newDiv.innerHTML = testimonialContainer;

        const oldTestContainer = document.getElementById('testimonialContainer');
        if(!oldTestContainer) {
            btnElements[0].parentNode.appendChild(newDiv);
        }
        
        
    } else {
        console.error('Parent element not found');
    }
}

const updateContinueButton = ()=>{
    const bottomBtnParent= document.querySelector(
        '.sticky.bottom-0.left-0.z-30.order-\\[999999999\\].-mx-1.flex.w-\\[calc\\(100\\%\\+8px\\)\\].flex-grow.items-end.justify-end'
      );
    if(bottomBtnParent){
        const btn = bottomBtnParent.querySelector('button');
        btn.className = "landing-cta-button"
        btn.innerHTML = `
            PROCEED TO CHECKOUT
            <span class="landing-arrow">→</span>
        `
    }
}