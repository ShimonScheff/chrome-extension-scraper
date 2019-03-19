const Helper = function () {
};

Helper.prototype = {
    waitForElement: function (element) {
        return new Promise((resolve) => {
            const searchInterval = setInterval(() => {
                console.log('Interval');
                const loginButton = document.querySelector(element);
                console.log(loginButton);
                if (loginButton) {
                    clearInterval(searchInterval);
                    resolve();
                }
            }, 500)
        })
    },
    clickOnElement: function (element) {
        const mouseClick = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
            view: window
        });

        element.dispatchEvent(mouseClick)
    }
};