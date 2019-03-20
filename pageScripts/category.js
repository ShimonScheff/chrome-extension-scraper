function getCategoryName() {
    return document.getElementsByTagName('h1')[0].textContent
}


function getBestSeller() {
    return document.getElementById('zg-ordered-list').children[0]
        .getElementsByClassName('zg-item')[0].children[0]
}


(async function  () {
    console.log('category');
    let helper;

    try {
        helper = new Helper();
    } catch (e) {

    }


    const categoryName = getCategoryName();
    const bestSeller = getBestSeller();

    helper.clickOnElement(bestSeller);

    const message = {
        nextPage: 'categoryBestSeller',
        categoryName
    };

    chrome.runtime.sendMessage(message, function (response) {
    });

})();