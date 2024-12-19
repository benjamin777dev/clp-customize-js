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

// Insert content dynamically
container.innerHTML = `
    <div style="padding: 2rem; max-width: 800px; margin: 0 auto; font-family: 'Arial', sans-serif; color: #2C3E50; line-height: 1.8; text-align: center;">
        <!-- Title -->
        <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1.5rem;">
            With medication, you'll lose ${minWeightLossPerWeek} to ${maxWeightLossPerWeek} pounds <span style="color: #68B04A;">per week</span>
        </h1>
        <!-- Separator -->
        <hr style="border: none; border-top: 1px solid #D3D3D3; margin: 1.5rem 0;">
        <!-- Subtext -->
        <p style="font-size: 1.2rem; color: #2C3E50;">
            It will take about <strong>${weeksToReachGoal} weeks</strong> to reach your goal weight of ${userData.targetWeight}.
        </p>
    </div>
`;
