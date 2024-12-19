const container = document.getElementById('script-container');
if (!container) return;

const buttons = document.getElementsByTagName('button');

if (buttons[1]) {
    buttons[1].addEventListener('click', () => {

        const inputs = document.getElementsByTagName("input");
        
        const targetWeight = inputs?.[0]?.value.trim() || null;
        
        const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
        userInfo.targetWeight = targetWeight;
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    });
} else {
    console.error("Button at index 0 does not exist.");
}

container.innerHTML = `
  <h1>Weight loss goal</h1>
`