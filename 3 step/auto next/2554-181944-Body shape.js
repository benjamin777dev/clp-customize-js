const container = document.getElementById('script-container');
if (!container) return;

container.innerHTML = `
    <!-- Main Content -->
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto; font-family: 'Montserrat', sans-serif; color: #1A1F71; line-height: 1.8; text-align: left;">
        <!-- Title -->
        <h1 id="animated-headline" style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1.5rem; text-align: center;">
            <span style="opacity: 0; display: inline-block;">Your body shape can help us determine important cortisol markers.</span>
        </h1>
        <!-- Subheader -->
        <p id="animated-subheader" style="font-size: 1.2rem; font-weight: 600; margin: 0; color: #1A1F71; text-align: center; opacity: 0; transform: translateY(20px);">
            Which of the following body types is most like yours? <span style="color: red;">*</span>
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

// Animate headline text
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
}, headlineSpans.length * 300 + 500); // Start subheader animation after headline finishes
