const container = document.getElementById("script-container");
if (!container) return;

container.innerHTML = `
<div id="timer"></div>
`;

const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

setTimeout(() => {
  document.querySelectorAll("h4").forEach((h4) => {
    if (
      h4.classList.contains("text-brand-heading-text") &&
      h4.classList.contains("font-brand-header") &&
      h4.classList.contains("text-3xl") &&
      h4.classList.contains("font-bold")
    ) {
      h4.style.fontFamily = '"STIX Two Text Variable", Times';
      h4.style.letterSpacing = "0.05rem";
      h4.style.fontSize = "2.125rem";
      // h4.style.paddingTop = "48px";
      h4.style.lineHeight = "1.15";
      h4.style.textAlign = "center";
      h4.style.setProperty("font-weight", "400", "important");
      h4.style.setProperty("color", "#333333 ", "important");

      // h4.nextElementSibling.style.fontFamily =  '"DM Sans Variable", sans-serif';
      h4.parentElement.style.paddingBottom = "24px";
      h4.parentElement.style.paddingTop = "48px";
    }
  });

  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  const radioOptions = document.querySelectorAll(
    "[id^='headlessui-radiogroup-option-']"
  );

  console.log(radioOptions);
  if (radioOptions) {
    radioOptions.forEach((option) => {
      const contentDiv = option.querySelector("div")
      contentDiv.style.fontFamily = '"DM Sans Variable", sans-serif';
      contentDiv.style.fontSize = "16px";
      contentDiv.style.lineHeight = "1.4";
      contentDiv.style.setProperty("color", "#333333 ", "important");
      contentDiv.style.setProperty("font-weight", "400", "important");
      contentDiv.style.borderRadius = "5px";
      contentDiv.style.setProperty(
        "height",
        "65px",
        "important"
      );
    });
  }

  document.querySelectorAll("button").forEach((button) => {
    const textSpan = button.querySelector("span span.line-clamp-2");
    if (textSpan) {
      textSpan.style.fontFamily = '"DM Sans Variable", sans-serif';
      textSpan.style.fontSize = "16px";
      textSpan.style.lineHeight = "1.4";
      textSpan.style.setProperty("color", "#333333 ", "important");
      textSpan.style.setProperty("font-weight", "400", "important");
      textSpan.parentElement.parentElement.style.borderRadius = "5px";
      textSpan.parentElement.parentElement.style.setProperty(
        "height",
        "65px",
        "important"
      );
    }
  });

  const button = document.querySelector(
    ".flex.flex-grow.justify-end.py-10 button"
  );

  if (button) {
    button.style.outline = "2px solid transparent";
    button.style.outlineOffset = "2px";
    button.style.lineHeight = "1";
    button.style.borderRadius = "2px";
    button.style.setProperty("font-weight", "400", "important");
    button.style.fontFamily = '"DM Sans Variable", sans-serif';
    button.style.textTransform = "capitalize";
    button.style.backgroundColor = "#F8F93F";
    button.style.color = "#0E0B20";
    button.style.borderColor = "yellow";
  }
}, 10);

const timerDiv = document.getElementById("timer");
timerDiv.parentElement.style.width = "100%";

Object.assign(timerDiv.style, {
  backgroundColor: "#F8F93F",
  color: "#0E0B20",
  padding: "10px",
  textAlign: "center",
  fontFamily: "DM Sans Variable, sans-serif",
  width: "100%",
  borderColor: "yellow",
  //   position: "fixed",
  //   top: "0",
  //   left: "0",
  //   zIndex: "1000",
});

// Set initial time (7 minutes, 59 seconds, and 49 milliseconds)
let minutes = 7;
let seconds = 59;
let milliseconds = 49;

function updateTimer() {
  // Create the timer text
  const text = `Order in the next ${minutes}:${seconds
    .toString()
    .padStart(2, "0")}:${milliseconds
    .toString()
    .padStart(2, "0")} to get Priority Doctor Access`;
  timerDiv.textContent = text;

  // Update the countdown
  if (milliseconds > 0) {
    milliseconds--;
  } else if (seconds > 0) {
    seconds--;
    milliseconds = 99;
  } else if (minutes > 0) {
    minutes--;
    seconds = 59;
    milliseconds = 99;
  }

  // Stop when timer reaches 0
  if (minutes === 0 && seconds === 0 && milliseconds === 0) {
    clearInterval(timerInterval);
  }
}

// Initial display
updateTimer();

// Update every 10 milliseconds
const timerInterval = setInterval(updateTimer, 10);
