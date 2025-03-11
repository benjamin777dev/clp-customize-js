const container = document.getElementById('script-container');
if (!container) return;

// Inject HTML structure into the container
container.innerHTML = `
    <!-- Main Content -->
    <div style="text-align: center; padding: 2rem; font-family: 'Montserrat', sans-serif; color: #1A1F71; width: 100%; margin: 0 auto;">
        <!-- Headline -->
        <h1 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem; line-height: 1.3; text-align: center; width: 100%; opacity: 0; word-wrap: break-word;" id="line1">
            Current and past medical conditions
        </h1>
    </div>
`;

// Add CSS animation dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fadeInLine {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Animate the line
const line1 = document.getElementById('line1');
line1.style.animation = 'fadeInLine 1s ease-out forwards';



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
                    const value = button.querySelector("span.line-clamp-2").textContent.trim();
                    console.log(`Button clicked: ${value}`);
                
                    if(value == "None of the above") {
                        setTimeout(() => {
                            const submitButton = form.querySelector('button[type="submit"]');
                            if (submitButton && submitButton !== event.target) {
                                submitButton.click();
                            }
                        }, 300);
                    }
                });

            });
        } else if (retries >= maxRetries) {
            clearInterval(checkForm);
            console.warn("Form not found after 5 seconds.");
        }

        retries++;
    }, 100);
}
