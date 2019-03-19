console.log('Hello start');

// redirect
// window.location.replace('https://affiliate-program.amazon.com/');
// send message to background
alert('Start Scraping');
const message = {
    currentPage: 'affiliatePage'
};
chrome.runtime.sendMessage(message, function (response) {
});
