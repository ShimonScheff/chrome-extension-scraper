function getCategoryName() {

}


(async function  () {
    console.log('category');
    const categoryName = document.getElementsByTagName('h1')[0].textContent;

    console.log(categoryName);


    const message = {
        nextPage: 'categoryBestSeller',
        categoryName
    };

    chrome.runtime.sendMessage(message, function (response) {
    });

})();