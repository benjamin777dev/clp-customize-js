const targetElement = document.getElementById("script-container");
if (!targetElement) return;

// Add the timer inside the target element with a compact modern design
targetElement.innerHTML = `
    <style>
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        @keyframes hourglassSpin {
            0% { transform: rotate(0deg); }
            50% { transform: rotate(180deg); }
            100% { transform: rotate(360deg); }
        }

        /* Container Styles */
        .timer-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.6rem;
            margin: 1rem auto;
            max-width: 600px;
            background: linear-gradient(135deg, #eef6fc, #f5faff);
            border: 1px solid #d1e3f8;
            border-radius: 8px;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
            animation: fadeIn 0.5s ease-out;
        }

        .timer-container:hover {
            transform: translateY(-2px);
            transition: transform 0.3s ease;
        }

        /* Hourglass Icon */
        .timer-icon {
            background: linear-gradient(135deg, #2979FF, #1565C0);
            color: white;
            font-weight: bold;
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            animation: hourglassSpin 2s linear infinite;
        }

        /* Timer Text */
        .timer-text {
            font-family: 'Figtree', sans-serif;
            color: #0D47A1;
            font-size: 0.9rem; /* Slightly smaller font size */
            font-weight: 600;
            line-height: 1.2;
        }

        /* Countdown Timer */
        .countdown-timer {
            font-weight: bold;
            font-size: 1.2rem; /* Reduced size */
            color: #2979FF;
            margin-left: 0.5rem;
        }
    </style>

    <div class="timer-container">
        <!-- Animated Hourglass Icon -->
        <div class="timer-icon">⌛</div>

        <!-- Timer Details -->
        <div style="flex: 1; margin-left: 1rem;">
            <div class="timer-text">
                Sale ends soon! Your cart is reserved for: 
                <span id="countdown-timer" class="countdown-timer">15:00</span>
            </div>
        </div>
    </div>
`;

// Countdown Timer Logic
const countdownTimer = document.getElementById("countdown-timer");
let remainingTime = 15 * 60; // 15 minutes in seconds

function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    // Update the timer content
    countdownTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    remainingTime--;

    if (remainingTime >= 0) {
        setTimeout(updateTimer, 1000); // Update every second
    } else {
        countdownTimer.textContent = "00:00"; // Timer ends
    }
}

updateTimer();