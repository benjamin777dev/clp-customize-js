const container = document.getElementById('script-container');
if (!container) return;

const userData = JSON.parse(localStorage.getItem('userInfo')) || {};

// Constants for weight loss range
const minWeightLossPerWeek = 3.74;
const maxWeightLossPerWeek = 4.98;

// Parsing weights to numbers for calculations
const currentWeight = parseFloat(userData.currentWeight) || 0;
const targetWeight = parseFloat(userData.targetWeight) || 0;

// Calculations
const totalWeightToLose = currentWeight - targetWeight;
const weeksToReachGoal = (totalWeightToLose / maxWeightLossPerWeek).toFixed(2);

container.innerHTML = `
    <!-- Main Content -->
    <div style="text-align: center; padding: 2rem; font-family: 'Montserrat', sans-serif; color: #1A1F71; max-width: 90%; margin: 0 auto;">
        <!-- Headline -->
        <h1 id="animated-headline" style="font-size: 2rem; font-weight: 700; margin-bottom: 1rem; line-height: 1.3;">
            <span style="opacity: 0; display: inline-block;">With medication, you'll lose </span> 
            <span style="opacity: 0; display: inline-block; color: #FFB400!important;"> ${minWeightLossPerWeek} </span>
            <span style="opacity: 0; display: inline-block;">to</span> 
            <span style="opacity: 0; display: inline-block; color: #FFB400!important;;"> ${maxWeightLossPerWeek} </span>
            <span style="opacity: 0; display: inline-block;">pounds </span>
            <span style="opacity: 0; display: inline-block; color: #FFB400!important;;"> per week</span>
        </h1>

        <!-- Top Line -->
        <hr style="width: 80%; border: none; height: 1px; background-color: #D3D3D3; margin: 1rem auto;">

        <!-- Subtext -->
        <p style="font-size: 1rem; font-weight: 400; margin: 0.5rem 0 0; color: #1A1F71;">
            It will take about 
            <strong style="color: #FFB400;">${weeksToReachGoal} weeks</strong>  
            to reach your goal weight of 
            <strong style="color: #FFB400;">${targetWeight} lbs</strong>.
        </p>

         <!-- Bottom Line -->
        <hr style="width: 80%; border: none; height: 1px; background-color: #D3D3D3; margin: 1rem auto;">

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

