const container = document.getElementById('script-container');
if (!container) return;


container.innerHTML = `
    <!-- Main Content -->
    <div style="text-align: center; padding: 2rem; font-family: 'Montserrat', sans-serif; color: #1A1F71; max-width: 90%; margin: 0 auto;">
        <!-- Headline -->
        <h1 id="animated-headline" style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.3;">
            <span style="opacity: 0; display: inline-block;">We'll move at your pace.</span> 
            <br>
            <br>
            <span style="opacity: 0; display: inline-block;">With GLP-1 medication, your goal to lose 
            <span style="color:#FFB400!important">95lbs</span> 
            is easier than you think - and it 
            <span style="opacity: 0; display: inline-block; color: #FFB400!important;"> doesn’t involve restrictive diets</span>
        </h1>

        <!-- Top Line -->
        <hr style="width: 80%; border: none; height: 1px; background-color: #D3D3D3; margin: 1rem auto;">

        <!-- Subtext -->
        <p style="font-size: 1rem; font-weight: 400; margin: 0.5rem 0 0; color: #1A1F71;">
            Now, let’s 
            <strong style="color: #FFB400;"> analyze your metabolism </strong>  
            and discover how well your body processes macronutrients.
        </p>

    </div>
`;

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

const headlineSpans = document.querySelectorAll('#animated-headline span');
headlineSpans.forEach((span, index) => {
    span.style.animation = `fadeInScale 1s ease-out forwards`;
    span.style.animationDelay = `${index * 0.3}s`;
});