let pageload = (function(){

    let contentDiv = document.getElementById('content')
    let optionsDiv = document.createElement('div')
    let winesDiv = document.createElement('div')
    let aboutDiv = document.createElement('div')
    let locationDiv = document.createElement('div')

    optionsDiv.classList.add('options')
    winesDiv.setAttribute('id','wines')
    aboutDiv.setAttribute('id','about')
    locationDiv.setAttribute('id','location')

    winesDiv.textContent = "Wines"
    aboutDiv.textContent = "About"
    locationDiv.textContent = "Location"
  

    optionsDiv.appendChild(winesDiv,aboutDiv,locationDiv)
    optionsDiv.appendChild(aboutDiv)
    optionsDiv.appendChild(locationDiv)
    contentDiv.appendChild(optionsDiv)
    
})();

export {pageload}