const container = document.getElementById('script-container');
if (!container) return;

// Dynamic data from schema
const userData = {
    firstName: "Odie",
    dob: "1976-03-15",
    currentWeight: 266,    // Example: current weight
    gender: "Male",
    goal: "Reach 100 lbs", // Example goal
    targetWeight: 100,     // Example: target weight
    height: "5'11",
    bmi: "37.10"
};

// Constants for weight loss range
const minWeightLossPerWeek = 3.74;
const maxWeightLossPerWeek = 4.98;

// Calculations
const totalWeightToLose = userData.currentWeight - userData.targetWeight;
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
