// document.getElementById('post-wall-e').addEventListener('click', () => {
//     postWalle();
// })

// function postWalle() {
//     const characterInfo = {
//         name: 'Wall-E',
//         occupation: 'Garbige Allocation Robot',
//         weapon: 'Head laser'
//     }

//     axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
//     .then(response => {
//         console.log(response.data);
//         const charactersResponse = 
//         `
//         <li>${response.data.id}</li>
//         <li>Name: ${response.data.name}</li>
//         <li>Occupation: ${response.data.occupation}</li>
//         `
//         document.getElementById('characters-list').innerHTML += charactersResponse;
//     })
// }

document.getElementById('character-form').onsubmit = function (event)
{   
    event.preventDefault();
            const characterInfo = {
                name: document.getElementsByName('name')[0].value,
                occupation: document.getElementsByName('occupation')[0].value,
                weapon: document.getElementsByName('weapon')[0].value
            }
        
            axios.post('https://ih-crud-api.herokuapp.com/characters', characterInfo)
            .then(response => {
                console.log(response.data);
                const charactersResponse = 
                `
                <li>${response.data.id}</li>
                <li>Name: ${response.data.name}</li>
                <li>Occupation: ${response.data.occupation}</li>
                <li>Weapon: ${response.data.weapon}</li>
                `
                document.getElementById('characters-list').innerHTML += charactersResponse;
            })
        
}

document.getElementById('get-character-button').onclick = function() {
    const id = document.getElementById('get-character-to-update').value;
    axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then(response => {
        console.log(response.data)
        document.getElementsByClassName('the-name-update')[0].value = response.data.name;
        document.getElementsByClassName('the-occupation-update')[0].value = response.data.occupation;
        document.getElementsByClassName('the-weapon-update')[0].value = response.data.weapon;
    })
    .catch(error => {
        console.log('Error is: ', error);
    })
}
document.getElementById('update-character-form').onsubmit = function(event) {
    event.preventDefault();
    const id = document.getElementById('get-character-to-update').value;
    const name = document.getElementsByClassName('the-name-update')[0].value;
    const occupation = document.getElementsByClassName('the-occupation-update')[0].value;
    const weapon = document.getElementsByClassName('the-weapon-update')[0].value;

    axios.patch(`https://ih-crud-api.herokuapp.com/characters/${id}`,
    {
        name, 
        occupation,
        weapon
    })
    .then(response => {
        console.log(response.data)
    })
};

