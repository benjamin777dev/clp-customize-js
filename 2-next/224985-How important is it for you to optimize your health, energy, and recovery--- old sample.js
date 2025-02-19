const container = document.getElementById("script-container");
if (!container) return;



{
  var addFonts = () => {
    if (!isFontLoaded("STIX Two Text")) {
      const linkFont1 = document.createElement("link");
      linkFont1.href =
        "https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap";
      linkFont1.rel = "stylesheet";
      document.head.appendChild(linkFont1);
    }

    if (!isFontLoaded("DM Sans")) {
      const linkFont2 = document.createElement("link");
      linkFont2.href =
        "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400&display=swap";
      linkFont2.rel = "stylesheet";
      document.head.appendChild(linkFont2);
    }
  };

  const isFontLoaded = (fontFamily) => {
    return document.fonts.check(`1rem ${fontFamily}`);
  };

  addFonts();
}


{
  if (typeof updateBottomButton !== "function") {
  var updateBottomButton = function () {
    const button = document.querySelector(
      ".flex.flex-grow.justify-end.py-10 button"
    );
    if (button) {
      Object.assign(button.style, {
        outline: "2px solid transparent",
        outlineOffset: "2px",
        lineHeight: "1",
        borderRadius: "2px",
        fontWeight: "400",
        fontFamily: '"DM Sans", sans-serif',
        textTransform: "capitalize",
        backgroundColor: "#F8F93F",
        color: "#0E0B20",
        borderColor: "yellow",
      });
    }
  };
  }

  if (typeof updateTitle !== "function") {
  var updateTitle = function () {
    document.querySelectorAll("h4").forEach((h4) => {
      if (
        h4.classList.contains("text-brand-heading-text") &&
        h4.classList.contains("font-brand-header") &&
        h4.classList.contains("text-3xl") &&
        h4.classList.contains("font-bold")
      ) {
        Object.assign(h4.style, {
          fontFamily: '"STIX Two Text", Times',
          letterSpacing: "0.05rem",
          fontSize: "2.125rem",
          lineHeight: "1.15",
          textAlign: "center",
        });
        h4.style.setProperty("font-weight", "400", "important");
        h4.style.setProperty("color", "#333333", "important");

        if (h4.parentElement) {
          Object.assign(h4.parentElement.style, {
            paddingBottom: "24px",
            paddingTop: "48px",
          });
        }
      }
    });
  };
  }

  if (typeof updateRadioSelect !== "function") {
  var updateRadioSelect = function () {
    const radioOptions = document.querySelectorAll(
      "[id^='headlessui-radiogroup-option-']"
    );
    radioOptions.forEach((option) => {
      const contentDiv = option.querySelector("div");
      if (contentDiv) {
        Object.assign(contentDiv.style, {
          fontFamily: '"DM Sans", sans-serif',
          fontSize: "16px",
          lineHeight: "1.4",
          color: "#333333",
          fontWeight: "400",
          borderRadius: "5px",
          height: "65px",
        });
        contentDiv.style.setProperty("color", "#333333", "important");
        contentDiv.style.setProperty("font-weight", "400", "important");
        contentDiv.style.setProperty("height", "65px", "important");
      }
    });
  };
  }


  const runUpdate = () => {
  updateTitle();
  updateRadioSelect();
  updateBottomButton();
  };

  const observer = new MutationObserver(() => {
  runUpdate();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  setTimeout(() => {
  observer.disconnect();
  }, 3000);
}


{
  let bannerDiv = document.getElementById("offer-banner");
  if (bannerDiv) return;

  container.innerHTML = `<div id="offer-banner"></div>`;

  bannerDiv = document.getElementById("offer-banner");

  if (bannerDiv && bannerDiv.parentElement) {
    bannerDiv.parentElement.style.width = "100%";
  }

  Object.assign(bannerDiv.style, {
    backgroundColor: "#F8F93F",
    color: "#0E0B20",
    padding: "10px",
    textAlign: "center",
    fontFamily: '"DM Sans", sans-serif',
    width: "100%",
    borderColor: "yellow",
  });

  bannerDiv.innerHTML =
    "SPECIAL OFFER: $100 OFF YOUR FIRST MONTH <strong>(Code: FEB100)</strong>";
}