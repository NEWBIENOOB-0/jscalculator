document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const keys = document.getElementById('keys');

    keys.addEventListener('click', function (event) {
        const target = event.target;

        if (target.tagName === 'BUTTON') {
            const buttonValue = target.dataset.value;
            const buttonAction = target.dataset.action;

            if (buttonValue !== undefined) {
                appendToDisplay(buttonValue);
            } else if (buttonAction === 'calculate') {
                calculate();
            } else if (buttonAction === 'clearDisplay') {
                clearDisplay();
            }
        }
    });

    function appendToDisplay(input) {
        display.value += input;
    }

    function calculate() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = 'Error';
        }
    }

    function clearDisplay() {
        display.value = '';
    }
});
