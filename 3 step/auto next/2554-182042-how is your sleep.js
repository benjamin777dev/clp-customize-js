const container = document.getElementById('script-container');
if (!container) return;

// Inject HTML structure into the container
container.innerHTML = `
    <!-- Main Content -->
    <div style="text-align: center; padding: 2rem; font-family: 'Montserrat', sans-serif; color: #1A1F71; width: 100%; margin: 0 auto; display: flex; flex-direction: column; align-items: center;">
        <!-- Headline -->
        <h1 id="animated-headline" style="font-size: 1.8rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.3; text-align: center; max-width: 90%;">
            <span style="opacity: 0; display: inline-block;">How you sleep</span>
            <span style="opacity: 0; display: inline-block;">tells us a lot about your efficiency levels.</span>
        </h1>
        <!-- Subheader -->
        <p id="animated-subheader" style="font-size: 1.5rem; font-weight: 500; margin-top: 1rem; line-height: 1.5; color: #1A1F71; opacity: 0; text-align: center; max-width: 90%;">
            How is your sleep?
        </p>
    </div>
`;

// Add CSS animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInScale {
        0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
            color: #ccc;
        }
        50% {
            opacity: 0.7;
            transform: translateY(-5px) scale(1.03);
            color: #1A1F71;
        }
        100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            color: #1A1F71;
        }
    }
`;
document.head.appendChild(style);

// Animate each word in sequence with effects
const headlineSpans = document.querySelectorAll('#animated-headline span');
headlineSpans.forEach((span, index) => {
    span.style.animation = `fadeInScale 1s ease-out forwards`;
    span.style.animationDelay = `${index * 0.3}s`; // Staggered delay for each word
});

// Animate subheader
const subheader = document.getElementById('animated-subheader');
setTimeout(() => {
    subheader.style.transition = 'opacity 1s ease, transform 1s ease';
    subheader.style.opacity = 1;
    subheader.style.transform = 'translateY(0)';
}, headlineSpans.length * 300 + 500);


{
    let retries = 0;
    const maxRetries = 50;

    const checkForm = setInterval(() => {
        const form = document.querySelector("form");

        if (form) {
            clearInterval(checkForm);
            console.log("Form found!");

            const buttons = form.querySelectorAll("button");
            buttons.forEach(button => {
                button.addEventListener('click', function(event) {
                    const labelId = button.getAttribute('aria-labelledby');
                    const label = document.getElementById(labelId);
                    const textSpan = label.querySelector('span');
                    const buttonText = textSpan ? textSpan.textContent : 'Button clicked';
                    
                    console.log(`Button clicked: ${buttonText}`);
                
                    setTimeout(() => {
                        const submitButton = form.querySelector('button[type="submit"]');
                        if (submitButton && submitButton !== event.target) {
                            submitButton.click();
                        }
                    }, 300);
                });

            });
        } else if (retries >= maxRetries) {
            clearInterval(checkForm);
            console.warn("Form not found after 5 seconds.");
        }

        retries++;
    }, 100);
}