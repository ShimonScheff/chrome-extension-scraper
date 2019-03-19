alert('Start Scraping');
const message = {
    currentPage: 'affiliatePage'
};

chrome.runtime.sendMessage(message, function (response) {
});
