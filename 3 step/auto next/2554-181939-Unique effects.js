const container = document.getElementById('script-container');
if (!container) return;

// Inject HTML structure into the container
container.innerHTML = `
    <!-- Main Content -->
    <div style="text-align: center; padding: 2rem; font-family: 'Montserrat', sans-serif; color: #1A1F71; max-width: 100%; margin: 0 auto;">
        <!-- Headline -->
        <h1 id="animated-headline" style="font-size: 2rem; font-weight: 700; margin: 0 0 1rem; line-height: 1.3; word-break: break-word;">
            <span style="opacity: 0; display: inline-block;">Men experience unique effects</span> 
            <span style="opacity: 0; display: inline-block;">from weight gain.</span>
        </h1>

        <!-- Top Line -->
        <hr style="width: 80%; border: none; height: 1px; background-color: #D3D3D3; margin: 1rem auto 1.5rem;">

        <!-- Subheader -->
        <p style="font-size: 1.5rem; font-weight: 600; margin: 0; color: #1A1F71; word-break: break-word;">
            Do you experience any of the following? <span style="color: red;">*</span>
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