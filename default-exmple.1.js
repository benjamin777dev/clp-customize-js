const container = document.getElementById('script-container');
    if (!container) return;

    container.innerHTML = `
        <div style="text-align: center;">
            <div style="width: 300px; height: 200px; margin: 0 auto 2rem; position: relative; background-color: #FFFFFF; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" role="img" aria-label="Animated representation of weight loss progress and semaglutide effect">
                <div style="position: absolute; width: 100%; height: 100%; display: flex; flex-direction: column; justify-content: space-between; padding: 20px 0; box-sizing: border-box;">
                    <div style="width: 100%; height: 1px; background-color: rgba(0, 0, 0, 0.1);"></div>
                    <div style="width: 100%; height: 1px; background-color: rgba(0, 0, 0, 0.1);"></div>
                    <div style="width: 100%; height: 1px; background-color: rgba(0, 0, 0, 0.1);"></div>
                    <div style="width: 100%; height: 1px; background-color: rgba(0, 0, 0, 0.1);"></div>
                    <div style="width: 100%; height: 1px; background-color: rgba(0, 0, 0, 0.1);"></div>
                </div>
                <div id="weightBar" style="position: absolute; bottom: 0; left: 0; width: 50%; height: 100%; background-color: #3498DB; transition: height 4s ease-in-out;"></div>
                <div id="semaglutideBar" style="position: absolute; bottom: 0; right: 0; width: 50%; height: 0%; background-color: #2ECC71; transition: height 4s ease-in-out;"></div>
                <div style="position: absolute; top: 50%; left: 25%; transform: translate(-50%, -50%); font-size: 1.5rem; font-weight: bold; color: #FFFFFF; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);" id="weightText">200 lbs</div>
                <div style="position: absolute; top: 50%; right: 25%; transform: translate(50%, -50%); font-size: 1.5rem; font-weight: bold; color: #FFFFFF; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);" id="semaglutideText">0%</div>
            </div>
            <h1 style="font-size: 2rem; font-weight: 700; color: #2C3E50; margin-bottom: 0.75rem;">Your Weight Loss Journey with Semaglutide</h1>
            <p style="font-size: 1.125rem; font-weight: 400; color: #34495E; margin-bottom: 2rem; line-height: 1.6;">Watch as semaglutide helps you achieve your weight loss goals. Experience the transformation in real-time!</p>
        </div>
    `;

    const weightBar = document.getElementById('weightBar');
    const semaglutideBar = document.getElementById('semaglutideBar');
    const weightText = document.getElementById('weightText');
    const semaglutideText = document.getElementById('semaglutideText');

    let currentWeight = 200;
    const targetWeight = 150;
    let currentSemaglutide = 0;
    const targetSemaglutide = 100;

    function animateWeightLoss() {
        if (currentWeight > targetWeight || currentSemaglutide < targetSemaglutide) {
            if (currentWeight > targetWeight) {
                currentWeight--;
                const weightProgress = (currentWeight - targetWeight) / (200 - targetWeight);
                weightBar.style.height = `${weightProgress * 100}%`;
                weightText.textContent = `${currentWeight} lbs`;
            }

            if (currentSemaglutide < targetSemaglutide) {
                currentSemaglutide++;
                semaglutideBar.style.height = `${currentSemaglutide}%`;
                semaglutideText.textContent = `${currentSemaglutide}%`;
            }

            requestAnimationFrame(animateWeightLoss);
        }
    }

    // Start the animation automatically
    requestAnimationFrame(animateWeightLoss);