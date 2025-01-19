const container = document.getElementById('script-container');
// if (!container) return;

container.innerHTML = `
    <style>
        .relative span {
            top: 20px!important;
            left: 20px;
            justify-content: left!important;
            font-size: 1rem!important;
            transition: all 0.2s ease;

        }
        
        .relative input {
            padding-top: 25px!important;
            font-size: 1.2rem!important;
            placeholdercoloer:transparent;
            border-radius: 6px!important;
            height: 70px!important;
        }

        .relative input::placeholder {
            color: transparent!important;
        }

        .relative input:focus+span,
        .relative input:not(:placeholder-shown)+span {
            top: 4px!important;
            font-size: 0.75rem!important;
            color: #3B82F6;
        }

        .relative input:focus::placeholder {
            color: transparent;
        }

        /* Remove number input spinners */
        .relative input[type="number"]::-webkit-inner-spin-button,
        .relative input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        .relative input[type="number"] {
            -moz-appearance: textfield;
        }



        .container {
            background: white;
            padding: 2rem;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 500px;
        }

        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 2rem;
        }

        .bmi-display {
            text-align: center;
            margin-bottom: 2rem;
        }

        .bmi-display h2 {
            color: #666;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        #bmiValue {
            font-size: 4rem;
            font-weight: bold;
            color: #333;
        }

        .bmi-scale {
            margin: 2rem 0;
        }

        .scale-bar {
            height: 8px;
            background: linear-gradient(to right,
                    #4CAF50 0%,
                    #8BC34A 20%,
                    #FFEB3B 40%,
                    #FF9800 60%,
                    #F44336 80%);
            border-radius: 4px;
            position: relative;
        }

        #bmiIndicator {
            width: 16px;
            height: 16px;
            background: white;
            border: 2px solid #333;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: left 0.3s ease;
        }

        .input-group {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .height-inputs {
            display: flex;
            gap: 1rem;
        }

        input {
            padding: 0.8rem;
            border: 1px solid #ddd;
            border-radius: 6px;
            font-size: 1rem;
            width: 100%;
        }

        input:focus {
            outline: none;
            border-color: #4CAF50;
        }

        .height-inputs input {
            width: 50%;
        }

        .bmi-warning {
            display: none;
            font-size: 0.875em;
            background: #fff1d4;
            border-radius: 4px;
            border: 1px solid #fae7c9;
            padding: 8px 12px;
            text-align: center;
            color: #222;
        }

    </style>

    <h1 style="font-size: 1.625rem">Let's calculate your current BMI </h1>

`;




const buttons = document.getElementsByTagName('button');


if (buttons[1]) {
    buttons[1].addEventListener('click', () => {
        const inputs = document.getElementsByTagName("input");

        const weight = inputs?.[0]?.value.trim() || null;
        const fHeight = inputs?.[1]?.value.trim() || null;
        const iHeight = inputs?.[2]?.value.trim() || null;

        const userInfo = {
            currentWeight: weight,
            fHeight,
            iHeight,
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    });
} else {
    console.error("Button at index 1 does not exist.");
}




const updateInputElement = () => {
    // const inputs = document.getElementsByTagName("input");
    const inputs = document.querySelectorAll('.questionnaire-animation input');

    inputs[0].id = 'weight';
    inputs[1].id = 'feet';
    inputs[2].id = 'inches';


    const newDiv = document.createElement('div');
    newDiv.id = 'bmiTitle';
    newDiv.innerHTML = `
        <div class="bmi-display">
            <h2>Your BMI</h2>
            <div id="bmiValue">0</div>
        </div>
        <div class="bmi-scale">
            <div class="scale-bar">
                <div id="bmiIndicator"></div>
            </div>
        </div>
        <div class="bmi-warning" id="bmiWarning">
            Your BMI is <span id="current-bmi">0.5</span>. Our doctors can only prescribe if your BMI is over <b>27</b>.
	    </div>
    `;
    
    // Insert `newDiv` before the first child of `inputs[0].parentNode.parentNode`
    const parentElement = inputs[0].parentNode.parentNode;
    const referenceElement = parentElement.firstChild;

    const oldElement = parentElement.querySelector('#bmiTitle');
    if(!oldElement){
        const oldBMIElement = parentElement.previousElementSibling;

        if (oldBMIElement) { // Check if the element exists
            oldBMIElement.style.display = 'none'; // Hide the element
        } else {
            console.warn('No previous element sibling found.');
        }


        parentElement.insertBefore(newDiv, referenceElement);
    }
    

    inputs[0].parentNode.style.order = 2;
    inputs[0].style.height = '70px';

    inputs[0].placeholder = '';
    const inputSpanElement = inputs[0].nextElementSibling;
    inputSpanElement.innerHTML = `Weight (in lbs)`

    inputs.forEach((ele)=>{
        const inputSpanElement = ele.nextElementSibling;
        inputSpanElement.addEventListener('click', ()=>{
            ele.focus();
        }); 
    })
}


// setTimeout(() => {
    updateInputElement();
// }, 1000);


function calculateBMI(weight, heightInInches) {
    if (weight <= 0 || heightInInches <= 0) return 0;
    return ((weight / (heightInInches * heightInInches)) * 703).toFixed(2);
}

function animateBMIValue(startValue, endValue, duration = 500) {
    const bmiValueElement = document.getElementById('bmiValue');
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = (startValue + (endValue - startValue) * progress).toFixed(2);
        bmiValueElement.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

function updateBMIDisplay(bmi) {
    const bmiValueElement = document.getElementById('bmiValue');
    const bmiIndicator = document.getElementById('bmiIndicator');

    const currentBMI = parseFloat(bmiValueElement.textContent) || 0;
    animateBMIValue(currentBMI, parseFloat(bmi));

    let position = 0;

    if (bmi >= 15) {
        if (bmi <= 30) {
            // Map BMI [15, 30] to position [0, 100]
            position = ((bmi - 15) / (30 - 15)) * 100;
        } else {
            // Cap the position at 100 for BMI > 30
            position = 100;
        }
    }


    bmiIndicator.style.left = `${position}%`;
}

function handleInput() {
    const feet = parseInt(document.getElementById('feet').value) || 0;
    const inches = parseInt(document.getElementById('inches').value) || 0;
    const weight = parseFloat(document.getElementById('weight').value) || 0;

    const totalHeightInInches = (feet * 12) + inches;
    const bmi = calculateBMI(weight, totalHeightInInches);

    const bmiWarningElement = document.getElementById('bmiWarning');
    if(bmi > 0 && bmi < 27) {
        bmiWarningElement.style.display = 'block';
        document.getElementById('current-bmi').innerHTML = bmi;
    } else {
        bmiWarningElement.style.display = 'none';
    }

    updateBMIDisplay(bmi);
}

// Add event listeners
document.getElementById('feet').addEventListener('input', handleInput);
document.getElementById('inches').addEventListener('input', handleInput);
document.getElementById('weight').addEventListener('input', handleInput);

// Initialize with empty values

updateBMIDisplay(0);