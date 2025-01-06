const targetElement = document.getElementById("script-container");
if (!targetElement) return;

// Add the timer inside the target element with a compact modern design
// targetElement.innerHTML = `
//     <style>
//         /* Animations */
//         @keyframes fadeIn {
//             from { opacity: 0; transform: translateY(-10px); }
//             to { opacity: 1; transform: translateY(0); }
//         }

//         @keyframes hourglassSpin {
//             0% { transform: rotate(0deg); }
//             50% { transform: rotate(180deg); }
//             100% { transform: rotate(360deg); }
//         }

//         /* Container Styles */
//         .timer-container {
//             display: flex;
//             align-items: center;
//             justify-content: space-between;
//             padding: 0.6rem;
//             margin: 1rem auto;
//             max-width: 600px;
//             background: linear-gradient(135deg, #eef6fc, #f5faff);
//             border: 1px solid #d1e3f8;
//             border-radius: 8px;
//             box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
//             animation: fadeIn 0.5s ease-out;
//         }

//         .timer-container:hover {
//             transform: translateY(-2px);
//             transition: transform 0.3s ease;
//         }

//         /* Hourglass Icon */
//         .timer-icon {
//             background: linear-gradient(135deg, #2979FF, #1565C0);
//             color: white;
//             font-weight: bold;
//             font-size: 1.1rem;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             width: 40px;
//             height: 40px;
//             border-radius: 50%;
//             animation: hourglassSpin 2s linear infinite;
//         }

//         /* Timer Text */
//         .timer-text {
//             font-family: 'Figtree', sans-serif;
//             color: #0D47A1;
//             font-size: 0.9rem; /* Slightly smaller font size */
//             font-weight: 600;
//             line-height: 1.2;
//         }

//         /* Countdown Timer */
//         .countdown-timer {
//             font-weight: bold;
//             font-size: 1.2rem; /* Reduced size */
//             color: #2979FF;
//             margin-left: 0.5rem;
//         }
//     </style>

//     <div class="timer-container">
//         <!-- Animated Hourglass Icon -->
//         <div class="timer-icon">⌛</div>

//         <!-- Timer Details -->
//         <div style="flex: 1; margin-left: 1rem;">
//             <div class="timer-text">
//                 Sale ends soon! Your cart is reserved for: 
//                 <span id="countdown-timer" class="countdown-timer">15:00</span>
//             </div>
//         </div>
//     </div>
// `;
targetElement.innerHTML = ``;

setTimeout(() => {
    const gridElement = document.querySelector('.grid.h-fit.w-full.grow.gap-3.lg\\:gap-8');
    if(gridElement){
        const countdownTimerElement = document.createElement('div');
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
        
        gridElement.insertBefore(countdownTimerElement, gridElement.firstChild);
    } else {
        console.error('The grid element was not found. Please check the selector.');
    }
    
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
}, 3000);



setTimeout(() => {
    const checkoutBtn = document.querySelector('button[type="submit"][tabindex="0"]');
    if (checkoutBtn) {
      checkoutBtn.style.borderRadius = '5px';
      checkoutBtn.style.padding = '10px';
      checkoutBtn.style.display = 'flex';
      checkoutBtn.style.flexDirection = 'column';
      checkoutBtn.style.height = 'auto';
      checkoutBtn.style.maxHeight = 'none';
    } else {
      console.warn('Button not found. Check the selector.');
    }
    
    checkoutBtn.innerHTML = `
        <span class="inline-flex gap-1 text-lg items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" style="width:20px">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z">
                </path>
            </svg> Complete Purchase
        </span>
        <span class="text-xs whitespace-normal w-4/5 md:w-full">Try it risk free! - LOSE 10% OF Your Bodyweight Or Your money back</span>
    `
}, 3000);



const targetNextslide = document.createElement('div');
targetNextslide.style.order = '99999';
targetNextslide.innerHTML = `
    <style>
        .testimonial-container {
            width: 100%;
            max-width: 600px;
            position: relative;
            padding: 20px;
        }
        
        .testimonial-slider {
            position: relative;
            overflow: hidden;
            height: 300px;
        }
        
        .testimonial {
            position: absolute;
            width: 100%;
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
        
        .stars {
            color: #ffd700;
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
        
        h2 {
            color: var(--text-color);
            margin-bottom: 1rem;
            font-size: 1.5rem;
        }
        
        p {
            color: #666;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
        
        .author {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
        }
        
        .author-info h3 {
            font-size: 1rem;
            color: var(--text-color);
        }
        
        .verified {
            color: #22c55e;
            font-size: 0.875rem;
        }
        
        .date {
            color: #666;
            font-size: 0.875rem;
        }
        
        .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: white;
            border: none;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            font-size: 1.2rem;
            color: #1A1F71;
            transition: all 0.3s ease;
        }
        
        .nav-btn:hover {
            background: #1A1F71;
            color: white;
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
            color: #0c4a6e;
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
            color: #4a5568;
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
            color: #4a5568;
            font-size: 15px;
            margin-bottom: 16px;
        }

        .contact-number {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .contact-number a {
            color: #1a237e;
            font-size: 18px;
            font-weight: 600;
            text-decoration: none;
        }

        .agent-image {
            width: 48px;
            height: 48px;
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="%23e2e8f0"/><path d="M12 13c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" fill="%2394a3b8"/></svg>');
            position: absolute;
            right: 24px;
            bottom: 24px;
            border-radius: 50%;
        }

    </style>

    <div class="testimonial-container">
        <div class="testimonial-slider">
            <div class="testimonial active">
            <div class="stars">★★★★★</div>
            <h2>Great Experience</h2>
            <p>The whole process was positive. They are very proactive and quick to respond with an...</p>
            <div class="author">
                <div class="author-info">
                <h3>Amanda L.</h3>
                <span class="verified">✓ Verified Buyer</span>
                </div>
                <div class="date">August 16, 2024</div>
            </div>
            </div>

            <div class="testimonial">
            <div class="stars">★★★★★</div>
            <h2>Excellent Service</h2>
            <p>Outstanding customer support and quality products. Would definitely recommend!</p>
            <div class="author">
                <div class="author-info">
                <h3>Michael R.</h3>
                <span class="verified">✓ Verified Buyer</span>
                </div>
                <div class="date">August 15, 2024</div>
            </div>
            </div>

            <div class="testimonial">
            <div class="stars">★★★★★</div>
            <h2>Very Satisfied</h2>
            <p>Everything exceeded my expectations. The team was professional and helpful.</p>
            <div class="author">
                <div class="author-info">
                <h3>Sarah K.</h3>
                <span class="verified">✓ Verified Buyer</span>
                </div>
                <div class="date">August 14, 2024</div>
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
        <h2>Need Help?</h2>
        <div class="availability">
            <span class="status-dot"></span>
            Available 8 AM - 8 PM ET
        </div>
        <p class="specialist-text">Our program specialists are here for you</p>
        <div class="contact-number">
            <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="#1a237e"
                    d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM19 12h2c0-4.8-3.9-8.7-8.7-8.7v2c3.7 0 6.7 3 6.7 6.7z" />
            </svg>
            <a href="tel:+15512399025">+1 (551) 239-9025</a>
        </div>
        <div class="agent-image"></div>
    </div>


`

setTimeout(() => {
    const targetElementex = document.querySelector('.order-last.-mt-4');

    if (targetElementex) {
        targetElementex.after(targetNextslide);
    } else {
        console.warn('The target element was not found.');
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


