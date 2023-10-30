// Create a new XMLHttpRequest
let xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL https://restcountries.com/v3.1/all
xhr.open('GET', 'https://restcountries.com/v3.1/all', false);

// Send the request over the network
xhr.send();

    // Parse JSON data
    let data = JSON.parse(xhr.responseText);

    // Get all the countries from Asia continent /region using Filter function
    let asianCountries = data.filter(country => country.region === 'Asia');
    console.log('Asian Countries:', asianCountries);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    let smallCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 2 lakhs:', smallCountries);

    // Print the following details name, capital, flag, using forEach function
    data.forEach(country => {
        console.log('Name:', country.name.common, ', Capital:', country.capital, ', Flag:', country.flag);
    });

    // Print the total population of countries using reduce function
    let totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log('Total population:', totalPopulation);

    // Print the country that uses US dollars as currency
    let usdCountries = data.filter((country)=> {const {currencies = {}}=country;
        return Object.keys(currencies).includes("USD");
    });
    console.log(usdCountries);
     





