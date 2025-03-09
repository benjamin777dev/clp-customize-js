const container = document.getElementById('script-container');
// if (!container) return;

container.parentNode.parentNode.style.overflowX = 'hidden';

        container.innerHTML = `
            <div style="max-width: 900px; margin: 0 auto; font-family: 'Figtree', sans-serif; color: #1A1F71;">
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
            </div>
        `;

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
        justify-content: start;
        align-items: center;
        float: left;
        border-right:1px solid #E1E5EC;
        width: 120px;
        height: 100%;
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
            parentDivOfImg.style.zIndex = '10';
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
                border-radius: 10px;
                position: relative;
                padding-left: 40px;
                overflow: hidden;
                box-shadow: none;
                border: 4px solid #E1E5EC;
                padding-top: 45px;
                padding-bottom: 45px;
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
                    margin-top: 7px;
                    color: #1A1F71;
                `;
                if(!titleElements[2]){
                    titleElements[1].style.cssText = `font-weight: 700;`;
                }

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
            
            if(titleElements[2]) {
                titleElements[2].style.cssText = `
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
                    btn.style.borderColor = '#F8F93F';
                    clickedSpan.parentNode.style.backgroundColor = '#F8F93F';
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



setTimeout(() => {
    updateRadioButton();
    // updateContinueButton();
}, 1000);