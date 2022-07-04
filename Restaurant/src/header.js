let headerpage = (function(){

    let contentDiv = document.getElementById('content');
    let headerDiv = document.createElement('div');
    headerDiv.classList.add('header');
    headerDiv.textContent = "Masurian Vineyard"
    contentDiv.appendChild(headerDiv)

})();

export {headerpage}