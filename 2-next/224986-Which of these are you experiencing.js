const container = document.getElementById("script-container");
if (!container) return;

container.innerHTML = ``;

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
      h4.style.lineHeight = "1.15";
      h4.style.setProperty("font-weight", "400", "important");
      h4.style.setProperty("color", "#333333 ", "important");

    }
  });


  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);

  document.querySelectorAll("button").forEach((button) => {
    const textSpan = button.querySelector("span span.line-clamp-2");
    if (textSpan) {
      textSpan.style.fontFamily = '"DM Sans Variable", sans-serif';
      textSpan.style.fontSize = "16px";
      textSpan.style.lineHeight = "1.4";
      textSpan.style.setProperty("color", "#333333 ", "important");
      textSpan.style.setProperty("font-weight", "400", "important");
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
}, 500);
