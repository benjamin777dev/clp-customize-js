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

  if (typeof updateCheckSelect !== "function") {
    var updateCheckSelect = function () {
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
    };
  }

  const runUpdate = () => {
    updateTitle();
    updateRadioSelect();
    updateBottomButton();
    updateCheckSelect();
  };

  const observer = new MutationObserver(() => {
    runUpdate();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  setTimeout(() => {
    observer.disconnect();
  }, 3000);
}

container.innerHTML = `<div id="timer"></div>`;

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

{
  // Set initial time (7 minutes, 59 seconds, and 49 milliseconds)
  let minutes = 7;
  let seconds = 59;
  let milliseconds = 49;

  function updateTimer() {
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
}

const getBirthday = () => {
  const monthElement = document.querySelector(
    '[role="spinbutton"][aria-label="month"]'
  );
  const dayElement = document.querySelector(
    '[role="spinbutton"][aria-label="day"]'
  );
  const yearElement = document.querySelector(
    '[role="spinbutton"][aria-label="year"]'
  );

  const month = monthElement
    ? parseInt(monthElement.getAttribute("aria-valuenow"))
    : null;
  const day = dayElement
    ? parseInt(dayElement.getAttribute("aria-valuenow"))
    : null;
  const year = yearElement
    ? parseInt(yearElement.getAttribute("aria-valuenow"))
    : null;

  return { month, day, year };
};

const calculateAge = () => {
  const { month, day, year } = getBirthday();

  if (!month || !day || !year) {
    console.warn("Invalid date provided");
    return null;
  }

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
};

const updateUserInfo = () => {
  let userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};

  const { month, day, year } = getBirthday();
  const age = calculateAge();

  userInfo.birthday = { month, day, year };
  userInfo.age = age;

  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  console.log("Updated user info:", userInfo);
};

const catchCountinueButton = () => {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    if (button.innerText.trim() === "Continue") {
      button.addEventListener("click", () => {
        console.log("Unique Continue button clicked!");

        const birthday = getBirthday();
        console.log("Birthday:", birthday);
        console.log("Your age is:", calculateAge());

        updateUserInfo();
        GetGenderElement();
      });
    }
  });
};

setTimeout(() => {
  catchCountinueButton();
}, 1000);

const GetGenderElement = () => {
  setTimeout(() => {
    const radioButtons = document.querySelectorAll('[role="radio"]');

    radioButtons.forEach((radio) => {
      console.log(radio.parentElement);
      radio.parentElement.addEventListener("click", () => {
        radioButtons.forEach((rb) => rb.setAttribute("aria-checked", "false"));
        radio.setAttribute("aria-checked", "true");

        const selectedGender = radio.querySelector("p")?.innerText.trim();

        let userInfo = JSON.parse(localStorage.getItem("userInfo")) || {};
        userInfo.gender = selectedGender;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    });
    });
  }, 500);
};