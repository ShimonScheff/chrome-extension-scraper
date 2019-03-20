alert('Start Scraping');
/*const message = {
    currentPage: 'affiliatePage'
};*/

const message = {
    nextPage: 'amazonBestSellers'
};

chrome.runtime.sendMessage(message, function (response) {
});
