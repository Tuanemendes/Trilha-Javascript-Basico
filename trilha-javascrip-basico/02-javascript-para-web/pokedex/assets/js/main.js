const pokemonList = document.getElementById('pokemon-list');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 151;
const limit = 50;
let offset = 0;




function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => ` 
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.numberPokemon}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')} 
                    </ol>
                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>`).join('');
        pokemonList.innerHTML += newHtml;

        /*  
         outra forma sem refatoração
         const newList =  pokemons.map((pokemon) => {
             return convertPokemonToLi(pokemon)
         })
         const newhtml = newList.join('') // as aspas simples é para retirar as vigulas do join 
         pokemonList.innerHTML += newhtml */


        /*   
        forma mais complexa 
        const listItens = []
            for (let i = 0; i < pokemons.length; i++) {
                const pokemon = pokemons[i]
                listItens.push(convertPokemonToLi(pokemon))
                
            }
           console.log(listItens) */
    })
}

loadPokemonItens(offset, limit)
loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordNextPage = offset + limit;
    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
        return
    } else {
        loadPokemonItens(offset, limit);
    }
})



