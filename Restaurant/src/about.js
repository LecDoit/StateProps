let aboutSection = function(){
    let contentDiv = document.getElementById('content');
    let aboutSectionDiv = document.createElement('div');
    aboutSectionDiv.classList.add('bottom')
    aboutSectionDiv.textContent = 'The Masovian Vineyard is comprised of two parcels of land, totaling 28 hectares. They are planted mainly with strains of Solaris and Johanniter, but include Riesling, Hibernal, Seyval Blanc, Rondo, Regent and Cabernet as well. We also create ice wine with fruit frozen in winter, and in the near future Polish sparkling wine will become a part of our offer. A well-equipped processing facility, as well as our own laboratory, allow us to precisely monitor every parameter of our wine, at every stage of its production. The antique building of the winery also houses our offices, a wine-tasting/concert hall, and a shop with our wines.'

    contentDiv.appendChild(aboutSectionDiv)
}

export {aboutSection}