let winesSection = function(){
    let contentDiv = document.getElementById('content');
    let winesSectionDiv = document.createElement('div');
    winesSectionDiv.classList.add('bottom')
    let ChardonnayDiv = document.createElement('div')
    let ChardonnayPic = document.createElement('div')
    let ChardonnayAbout = document.createElement('div')
    let SolarisDiv = document.createElement('div')
    let SolarisPic = document.createElement('div')
    let SolarisAbout = document.createElement('div')

    ChardonnayDiv.textContent = ' Chardonnay 2020'
    ChardonnayAbout.textContent = "Chardonnay from the Masurian Vineyard is a unique wine. Its been fermented in American Oak and matured in acacia barriques. It made our Chardonnay a full body wine. In nose you can smell aromas of flowers, fruits like ripe pear, peach and pineapple and some buttery and creamy notes. It is perfect to drink right now but it has 3-5 years maturation potential. Chardonnay is perfect for pairing with food."

    SolarisDiv.textContent = "Solaris 2021"
    SolarisAbout.textContent = "Solaris from the Masurian Vineyard has crisp acidity and is full of green apple, lemon and lime aromas. You can also find a touch of melon and jasmine.Its crispy acidity is well balanced by fruity sweetness. In palate you can sense apple and ripe grapefruit notes. It is perfect to drink right now but it has 3-5 years maturation potential."

    


    ChardonnayDiv.appendChild(ChardonnayAbout)
    ChardonnayDiv.appendChild(ChardonnayPic)

    SolarisDiv.appendChild(SolarisAbout)
    SolarisDiv.appendChild(SolarisPic)

    winesSectionDiv.appendChild(ChardonnayDiv)
    winesSectionDiv.appendChild(SolarisDiv)
    contentDiv.appendChild(winesSectionDiv)
}

export {winesSection}