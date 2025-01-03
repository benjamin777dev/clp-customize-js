const container = document.getElementById("script-container");
if (!container) return;

container.innerHTML = `

    <style>
        .progress-container {
            width: 100%;
            margin: 30px 0;
            position: relative;
        }

        .progress-bar {
            width: 100%;
            height: 30px;
            background-color: #9ac2e9;
            border-radius: 999px;
            overflow: hidden;
        }

        .progress {
            width: 0;
            height: 100%;
            background-color: #1A1F71;
            border-radius: 999px;
            transition: width 0.5s ease-out;
        }

        .image-container {
            margin-top: 40px;
            margin: auto;
            position: relative;
            height: 300px;
            max-width: 350px;
        }

        .progress-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            border-radius: 8px;
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
            /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
        }
        .progress-image.active {
            opacity: 1;
        }
    </style>

    <div style="text-align: center; padding: 2rem; font-family: 'Montserrat', sans-serif; color: #1A1F71; max-width: 90%; margin: 0 auto;">
        <h2 style="font-size: 1.5rem; font-weight: bold;">Checking results for approval...</h2>

        <div class="progress-container">
            <span id='progressState'style="position:absolute; left: calc(50% - 15px); top: 6px; color: white; text-shadow: 0 0 5px #1A1F71; font-weight: bold; font-size: 14px;">0 %</span>
            <div class="progress-bar">
                <div class="progress" id="progress"></div>
            </div>
        </div>

        <div style="height: 120px; max-width: 400px;">
            <h4 style="font-size: 1rem; font-weight: 400; margin: 0.5rem 0 0; color: #1A1F71;" id="title">
                Semaglutide is associated with improved heart health, lower cholesterol levels, and enhanced&nbsp;overall metabolic health
            </h4>
        </div>

        <div class="image-container">
            <img src="https://i112624.tryeden.com/img/dna_animation/1.jpg" alt="Step 1"
                class="progress-image active">
            <img src="https://i112624.tryeden.com/img/dna_animation/2.jpg" alt="Step 2" class="progress-image">
            <img src="https://i112624.tryeden.com/img/dna_animation/3.jpg" alt="Step 3" class="progress-image">
            <img src="https://i112624.tryeden.com/img/dna_animation/4.jpg" alt="Step 4" class="progress-image">
            <img src="https://i112624.tryeden.com/img/dna_animation/5.jpg" alt="Step 4" class="progress-image">
            <img src="https://i112624.tryeden.com/img/dna_animation/7.jpg" alt="Step 4" class="progress-image">
        </div>
    </div>
`;


const progressBar = document.getElementById('progress');
const title = document.getElementById('title');
const images = document.querySelectorAll('.progress-image');
let processState = document.getElementById('progressState');

const steps = [
    { progress: 16, title: 'Semaglutide is associated with improved heart health, lower cholesterol levels, and enhanced&nbsp;overall metabolic health' },
    { progress: 32, title: 'We understand weight loss isn’t about willpower— it’s about consistency.' },
    { progress: 48, title: 'Your medication is delivered from a state licensed pharmacy in our network, right to your door when you need it.' },
    { progress: 64, title: 'You’ll get 1-on-1 guidance from US-based health experts.' },
    { progress: 80, title: 'Eden is popular for good reason: Always clinically tested, third party tested for sterility and potency.' },
    { progress: 100, title: 'We’ll reset your metabolism with just one dose each week' }
];

let currentProgress = 0;
const totalDuration = 20000;
const updateInterval = 50;
const progressIncrement = (100 * updateInterval) / totalDuration;

const buttons = document.getElementsByTagName('button');
if (buttons.length > 1) {
    buttons[1].style.display = 'none';
} else {
    console.warn('Button at index 1 does not exist.');
}

function updateProgress() {
    currentProgress = Math.min(currentProgress + progressIncrement, 100);
    progressBar.style.width = `${currentProgress}%`;

    const currentStep = Math.floor((currentProgress / 100) * steps.length);
    const stepIndex = Math.min(currentStep, steps.length - 1);

    if (currentProgress % (100 / steps.length) < progressIncrement) {
        
        title.style.opacity = '0';
        setTimeout(() => {
            title.textContent = steps[stepIndex].title;
            title.style.opacity = '1';
        }, 300);

        images.forEach((img, i) => {
            img.classList.remove('active');
            if (i === stepIndex) {
                img.classList.add('active');
            }
        });
    }

    if (currentProgress < 100) {
        requestAnimationFrame(() => setTimeout(updateProgress, updateInterval));
        processState.innerText = `${Math.floor(currentProgress)} %`
        return;
    }

    if (currentProgress >= 100) {
        if (buttons.length > 1) { 
            buttons[1].click(); 
        } else {
            console.warn('Button at index 1 does not exist.');
        }
    }
    
}

updateProgress();