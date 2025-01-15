const container = document.getElementById('script-container');
if (!container) return;

container.innerHTML = ``;

setTimeout(() => {
    const createAccountBtn = document.querySelector('.font-brand-body.text-sm.underline');
    if (createAccountBtn) {
        createAccountBtn.addEventListener('click', () => {
            setTimeout(() => {
                handleInput();
            }, 500);
        });
    } else {
        console.error('Create Account button not found.');
    }
}, 500);


const handleInput = () => {
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');

    if (firstName) {
        firstName.addEventListener('input', (event) => {
            const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
            userInfo.firstName = event.target.value;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        });
    } else {
        console.warn('First Name input not found.');
    }

    if (lastName) {
        lastName.addEventListener('input', (event) => {
            const userInfo = JSON.parse(localStorage.getItem('userInfo')) || {};
            userInfo.lastName = event.target.value;
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        });
    } else {
        console.warn('Last Name input not found.');
    }
};