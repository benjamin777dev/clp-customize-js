const container = document.getElementById("script-container");
if (!container) return;
container.innerHTML = `
<div id="offer-banner"></div>
`;

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap";
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
      h4.style.lineHeight = "1.15";
      h4.style.textAlign = "center";
      h4.style.setProperty("font-weight", "400", "important");
      h4.style.setProperty("color", "#333333 ", "important");
      h4.parentElement.style.paddingBottom = "24px";
      h4.parentElement.style.paddingTop = "48px";
    }
  });

  const link = document.createElement("link");
  link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  const radioOptions = document.querySelectorAll("[id^='headlessui-radiogroup-option-']");
  if (radioOptions) {
    radioOptions.forEach((option) => {
      const contentDiv = option.querySelector("div")
      contentDiv.style.fontFamily = '"DM Sans Variable", sans-serif';
      contentDiv.style.fontSize = "16px";
      contentDiv.style.lineHeight = "1.4";
      contentDiv.style.setProperty("color", "#333333 ", "important");
      contentDiv.style.setProperty("font-weight", "400", "important");
      contentDiv.style.borderRadius = "5px";
      contentDiv.style.setProperty("height", "65px", "important");
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
      textSpan.parentElement.parentElement.style.setProperty("height", "65px", "important");
    }
  });

  const button = document.querySelector(".flex.flex-grow.justify-end.py-10 button");
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

const bannerDiv = document.getElementById("offer-banner");
bannerDiv.parentElement.style.width = "100%";
Object.assign(bannerDiv.style, {
  backgroundColor: "#F8F93F",
  color: "#0E0B20",
  padding: "10px",
  textAlign: "center",
  fontFamily: "DM Sans Variable, sans-serif",
  width: "100%",
  borderColor: "yellow",
});

bannerDiv.innerHTML = 'SPECIAL OFFER: $100 OFF YOUR FIRST MONTH <strong>(Code: FEB100)</strong>';