document.querySelector('#search').addEventListener('click', function () {
    var pokemonName = document.querySelector('#name').value
    fetch(cd  + pokemonName, {
    mode: 'no-cors'
    })
        .then(function(response) {
            var pokemon = response.json()
        })
        .then(function(pokemon) {
            console.dir(pokemon)
            document.querySelector('#weight').innerText = pokemon.weight
            document.querySelector('#height').innerText = pokemon.height
        })
})