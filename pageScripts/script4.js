(function () {

    // just place a div at top right
    var div = document.createElement('div');
    div.style.overflow = 'hiddeen';
    div.textContent = 'Injected Script 4!';
    document.body.insertAdjacentElement('afterbegin',div);

    console.log('injected Script 4!');

})();