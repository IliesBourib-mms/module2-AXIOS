// const restCountiesAPI = axios.create({
//     baseURL: 'https://restcountries.eu/rest/v2/name/'
// });

document.getElementById('get-countrie').addEventListener('click', function() {
    const name = document.getElementById('input').value;

    axios.get(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(responseFromAPI => {
        // console.log('this is my response: ', responseFromAPI.data);
        const countryName = responseFromAPI.data[0].alpha3Code;
        const capital = responseFromAPI.data[0].capital;

        document.getElementById('country-name').innerHTML = countryName;
        document.getElementById('capital').innerHTML = capital;
    })
})