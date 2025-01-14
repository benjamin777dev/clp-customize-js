const targetElement = document.getElementById("script-container");
if (!targetElement) return;

targetElement.innerHTML = `
    <style>
        .pulsating-dot {
            display: block;
            width: 10px; /* Size of the dot */
            height: 10px;
            float:left;
            margin-right: 2px;
            background-color: #00c389; /* Green color */
            border-radius: 50%;
            position: relative; /* Necessary for positioning the pseudo-element */

        }

        .pulsating-dot::Before {
            content: ''; /* Required for pseudo-elements to render */
            position: absolute; /* Position relative to .pulsating-dot */
            top: 0;
            left: 0;
            width: 10px; /* Same size as the dot */
            height: 10px;
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
    </style>
`;


const generateTimerElement = ()=>{
    const gridElement = document.querySelector('.grid.h-fit.w-full.grow.gap-3.lg\\:gap-8');
    if(gridElement){
        const countdownTimerElement = document.createElement('div');
        countdownTimerElement.id = 'countdownTimer';
        countdownTimerElement.innerHTML = `
            <style>
                /* Animations */
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
        
                @keyframes hourglassSpin {
                    0% { transform: rotate(0deg); }
                    50% { transform: rotate(180deg); }
                    100% { transform: rotate(360deg); }
                }
        
                /* Container Styles */
                .timer-container {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0.6rem;
                    margin: 1rem auto;
                    max-width: 600px;
                    background: linear-gradient(135deg, #eef6fc, #f5faff);
                    border: 1px solid #d1e3f8;
                    border-radius: 8px;
                    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
                    animation: fadeIn 0.5s ease-out;
                }
        
                .timer-container:hover {
                    transform: translateY(-2px);
                    transition: transform 0.3s ease;
                }
        
                /* Hourglass Icon */
                .timer-icon {
                    background: linear-gradient(135deg, #2979FF, #1565C0);
                    color: white;
                    font-weight: bold;
                    font-size: 1.1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    animation: hourglassSpin 2s linear infinite;
                }
        
                /* Timer Text */
                .timer-text {
                    font-family: 'Figtree', sans-serif;
                    color: #0D47A1;
                    font-size: 0.9rem; /* Slightly smaller font size */
                    font-weight: 600;
                    line-height: 1.2;
                }
        
                /* Countdown Timer */
                .countdown-timer {
                    font-weight: bold;
                    font-size: 1.2rem; /* Reduced size */
                    color: #2979FF;
                    margin-left: 0.5rem;
                }
            </style>
        
            <div class="timer-container">
                <!-- Animated Hourglass Icon -->
                <div class="timer-icon">⌛</div>
        
                <!-- Timer Details -->
                <div style="flex: 1; margin-left: 1rem;">
                    <div class="timer-text">
                        Sale ends soon! <br>Your cart is reserved for: 
                        <span id="countdown-timer" class="countdown-timer">15:00</span>
                    </div>
                </div>
            </div>
        `;
    
        const existTimerElement = gridElement.querySelector('#countdownTimer');
        if(!existTimerElement){
            gridElement.insertBefore(countdownTimerElement, gridElement.firstChild);
        } else {
            console.error('timer already exists')
        }
    
    } else {
        console.error('The grid element was not found. Please check the selector.');
    }
}


setTimeout(() => {
    generateTimerElement();
    
    // Countdown Timer Logic
    const countdownTimer = document.getElementById("countdown-timer");
    let remainingTime = 15 * 60; // 15 minutes in seconds
    function updateTimer() {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
    
        // Update the timer content
        countdownTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    
        remainingTime--;
    
        if (remainingTime >= 0) {
            setTimeout(updateTimer, 1000); // Update every second
        } else {
            countdownTimer.textContent = "00:00"; // Timer ends
        }
    }
    
    updateTimer();
    updateCheckoutBtn();

}, 3000);

const updateCheckoutBtn = ()=>{
    const checkoutBtn = document.querySelector('button[type="submit"][tabindex="0"]');
    if (checkoutBtn) {
      checkoutBtn.style.borderRadius = '5px';
      checkoutBtn.style.padding = '10px';
      checkoutBtn.style.gap = '1px';
      checkoutBtn.style.display = 'flex';
      checkoutBtn.style.flexDirection = 'column';
      checkoutBtn.style.height = 'auto';
      checkoutBtn.style.maxHeight = 'none';
    } else {
      console.warn('Button not found. Check the selector.');
    }
    
    checkoutBtn.innerHTML = `
        <span class="inline-flex gap-1 text-base items-center font-normal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" style="width:20px">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z">
                </path>
            </svg> COMPLETE PURCHASE
        </span>
        <span class="text-xs font-normal whitespace-normal w-4/5 md:w-full">TRY IT RISK FREE! - LOSE 10% OF YOUR BODYWEIGHT OR YOUR MONEY BACK</span>
    `
}

const targetNextslide = document.createElement('div');
targetNextslide.id = 'slideContainer'
targetNextslide.style.order = '99999';
targetNextslide.innerHTML = `
    <style>
        .testimonial-container {
            width: 100%;
            max-width: 600px;
            position: relative;
            margin-bottom: 20px;
        }
        
        .testimonial-slider {
            position: relative;
            min-height: 250px;
        }
        
        .testimonial {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
            transform: translateX(100%);
            transition: all 0.5s ease;
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .testimonial.active {
            opacity: 1;
            transform: translateX(0);
        }

        .testimonial > p {
            color: #1A1F71;
        /*    overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            max-height: 200px;" */
        }

        .stars {
            color: #ffd700;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
        
        h3 {
            color: #1A1F71;
            margin-top: 0.5rem;
            font-size: 1.2rem;
        }
        
        .author {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
        }
        
        .author-info {
            gap: 10px;
            display: flex;
            align-items: center;
        }

        .author-info h3 {
            font-size: 1rem;
            color: #1A1F71;
        }
        
        .author-info > img {
            border-radius: 9999px;
            width: 40px;
            height: 40px
        }
        
        .verified {
            color: #22c55e;
            font-size: 0.875rem;
        }
        
        .date {
            color: #1A1F71;
            font-size: 0.875rem;
        }
        
        .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #1A1F71;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            font-size: 1.2rem;
            color: #fff;
            transition: all 0.3s ease;
        }
        
        .nav-btn:hover {
            background: #fff;
            color: #1A1F71;
        }
        
        .prev-btn {
            left: -20px;
        }
        
        .next-btn {
            right: -20px;
        }
        
        @media (max-width: 640px) {
            .testimonial-container {
            padding: 10px;
            }
            
            .nav-btn {
            width: 30px;
            height: 30px;
            font-size: 1rem;
            }
            
            .prev-btn {
            left: -15px;
            }
            
            .next-btn {
            right: -15px;
            }
        }


        .guarantee-badge {
            background-color: #f0f9ff;
            border-radius: 12px;
            padding: 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 20px;
        }

        .badge-icon {
            background-color: #0ea5e9;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
        }

        .badge-text {
            font-size: 14px;
            color: #1A1F71;
            line-height: 1.4;
        }

        /* Help Section Styles */
        .help-section {
            background-color: white;
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            position: relative;
        }

        h2 {
            color: #1a237e;
            font-size: 24px;
            margin-bottom: 8px;
        }

        .availability {
            display: flex;
            align-items: center;
            gap: 8px;
            color: #1A1F71;
            font-size: 14px;
            margin-bottom: 16px;
        }

        .status-dot {
            width: 8px;
            height: 8px;
            background-color: #10b981;
            border-radius: 50%;
        }

        .specialist-text {
            color: #1A1F71;
            font-size: 16px;
            font-weight: 600;
        }

        .contact-number {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .contact-number a {
            color: #1A1F71;
            font-size: 18px;
            font-weight: 700;
            text-decoration: none;
        }

        .agent-image {
            width: 48px;
            height: 48px;
            border-radius: 50%;
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

    </style>

    <div class="testimonial-container">
        <div class="testimonial-slider">
            <div class="testimonial active">
                <div class="rating inline-flex gap-1">
                    ${'<span class="star inline-flex"><svg height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9893 0H0V19.9893H19.9893V0Z" fill="#00B67A"></path><path d="M13.0363 12.3284L9.99627 13.0988L14.3065 16.2429L13.0363 12.3284Z" fill="white"></path><path d="M11.6412 8.03898H16.9925L12.6823 11.1623L10.0171 13.078L5.68607 16.2013L7.33102 11.1623L3 8.03898H8.35131L9.99627 3L11.6412 8.03898Z" fill="white"></path></svg></span>'.repeat(5)}
                </div>
                <h3 class="font-semibold">GLP-1 gave me my life back</h3>
                <p>I have been using GLP-1 for a year and a half and have lost 79 pounds so far. My BMI was 39.9, on the limit for morbid obesity. Now my BMI is 27.3. GLP-1 gave me my life back</p>
                <div class="author">
                    <div class="author-info">
                        <img src="https://remedymeds.com/_next/image?url=%2Fimages%2Ftestimonials%2Famber.png&w=64&q=75" alt="author avatar">
                        <h3 class="font-bold">Ariane B. <span class="verified"></span></h3>
                    </div>
                </div>
            </div>

            <div class="testimonial">
                <div class="rating inline-flex gap-1">
                    ${'<span class="star inline-flex"><svg height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9893 0H0V19.9893H19.9893V0Z" fill="#00B67A"></path><path d="M13.0363 12.3284L9.99627 13.0988L14.3065 16.2429L13.0363 12.3284Z" fill="white"></path><path d="M11.6412 8.03898H16.9925L12.6823 11.1623L10.0171 13.078L5.68607 16.2013L7.33102 11.1623L3 8.03898H8.35131L9.99627 3L11.6412 8.03898Z" fill="white"></path></svg></span>'.repeat(5)}
                </div>
                <h3 class="font-semibold">GLP-1 medication has been my greatest asset</h3>
                <p>I am down 52lbs and feel a weight has been lifted off my shoulders (literally). It’s been an incredible journey, and my only regret is not starting sooner. I will never regret improving my health.</p>
                <div class="author">
                    <div class="author-info">
                        <img src="https://remedymeds.com/_next/image?url=%2Fimages%2Ftestimonials%2Fbernadette.png&w=64&q=75" alt="author avatar">
                        <h3 class="font-bold">Claudia C. <span class="verified"></span></h3>
                    </div>
                </div>
            </div>

            <div class="testimonial">
                <div class="rating inline-flex gap-1">
                    ${'<span class="star inline-flex"><svg height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9893 0H0V19.9893H19.9893V0Z" fill="#00B67A"></path><path d="M13.0363 12.3284L9.99627 13.0988L14.3065 16.2429L13.0363 12.3284Z" fill="white"></path><path d="M11.6412 8.03898H16.9925L12.6823 11.1623L10.0171 13.078L5.68607 16.2013L7.33102 11.1623L3 8.03898H8.35131L9.99627 3L11.6412 8.03898Z" fill="white"></path></svg></span>'.repeat(5)}
                </div>
                <h3 class="font-semibold">Thank you GLP-1!</h3>
                <p>I could never get rid of the excess weight. I even got lipo, but nothing worked. I was then invited to take GLP-1 and I lost 28 lbs within the first year.</p>
                <div class="author">
                    <div class="author-info">
                        <img src="https://remedymeds.com/_next/image?url=%2Fimages%2Ftestimonials%2Fbrenda.png&w=64&q=75" alt="author avatar">
                        <h3 class="font-bold">Kat R. <span class="verified"></span></h3>
                    </div>
                </div>
            </div>
        </div>

        <button class="nav-btn prev-btn">❮</button>
        <button class="nav-btn next-btn">❯</button>
    </div>


    <div class="guarantee-badge">
        <div class="badge-icon">
            <svg viewBox="0 0 24 24" width="24" height="24">
                <path fill="#ffffff"
                    d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
        </div>
        <div class="badge-text">
            <strong>Weight-loss guarantee:</strong> lose at least 10% of your bodyweight in four months, or your money back!
        </div>
    </div>

    <!-- Need Help section -->
    <div class="help-section">
        <div style="display: flex; justify-content: space-between; align-items: center;">
            <h2 class="font-semibold">Need Help?</h2>
            <div class="availability">
                <span class="pulsating-dot"></span>
                Available <span style="font-weight: bold">10 AM - 6 PM ET, Mon-Fir</span>
            </div>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; background-color: #f1f7fe; border-radius: 999px; padding: 5px; margin: 10px 0;">
            <p class="specialist-text ml-2">Our program specialists are here for you</p>
            <img class="agent-image" src="https://remedymeds.com/_next/image?url=%2Fimages%2Fsupport-rep.png&w=128&q=75"/>
        </div>
        <div class="contact-number">
            <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#1A1F71"
                    d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.8-3.9-8.7-8.7-8.7v2c3.7 0 6.7 3 6.7 6.7z" />
            </svg>
            <a href="tel:+15512399025">+1 (551) 239-9025</a>
        </div>
    </div>


`

setTimeout(() => {
    const targetElementex = document.querySelector('.order-last.-mt-4');
    if (targetElementex) {
        const existingSlider = targetElementex.parentNode.querySelector('#slideContainer');
        if (!existingSlider) {
            if (typeof targetNextslide !== 'undefined') {
                targetElementex.after(targetNextslide);
            } else {
                console.error('targetNextslide is not defined.');
            }
        } else {
            console.warn('Slider already exists within the target element.');
        }
    } else {
        console.warn('The target element ".order-last.-mt-4" was not found.');
    }
    
    const testimonials = document.querySelectorAll('.testimonial');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
          testimonial.classList.add('active');
        }
      });
    }
    
    function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
    }
    
    function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
    }
    
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);
    
    showTestimonial(currentIndex);
}, 5000);


