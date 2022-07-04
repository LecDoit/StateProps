let locationSection = function(){
    let contentDiv = document.getElementById('content');
    let locationSectionDiv = document.createElement('div');
    locationSectionDiv.classList.add('bottom')
    locationSectionDiv.textContent = 'Vinery is located in Masurian district of Poland near Niegocin Lake'

    contentDiv.appendChild(locationSectionDiv)
}

export {locationSection}