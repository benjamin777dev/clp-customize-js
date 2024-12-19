const container = document.getElementById('script-container');
if (!container) return;

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