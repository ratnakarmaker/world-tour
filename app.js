fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));
    

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
            const countryDiv = document.createElement('div');
            countryDiv.className = 'country';
    
                const countryInfo = `
                <h3 class="country_name">${country.name} </h3>
                <p>${country.capital} </p>
                <button onclick="displayCountryDetails('${country.name}')">Details</button>

                `;
                countryDiv.innerHTML = countryInfo;
            countriesDiv.appendChild(countryDiv);
    });

}
    const displayCountryDetails = name => {
        fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]));
}
const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>Population: ${country.population}</p>
    <p>Area: ${country.area}</p>
    <img src="${country.flag}">

    `
}
