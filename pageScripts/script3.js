(function () {

    // just place a div at top right
    var div = document.createElement('div');
    div.style.overflow = 'hiddeen';
    div.textContent = 'Injected Script 3!';
    document.body.insertAdjacentElement('afterbegin',div);

    console.log('injected Script 3!');

})();