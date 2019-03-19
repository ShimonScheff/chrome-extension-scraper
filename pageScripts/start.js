alert('Start Scraping');
/*const message = {
    currentPage: 'affiliatePage'
};*/

const message = {
    currentPage: 'amazonBestSellers'
};

chrome.runtime.sendMessage(message, function (response) {
});
