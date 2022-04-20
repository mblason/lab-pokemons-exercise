let count = 12

function showPokemons () {
let container = document.getElementById('pokemon')
container.innerHTML = `<img class="poke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${count}.svg">`
}


let prevbtn = document.getElementById('prevbtn')
let nextbtn = document.getElementById('nextbtn')

prevbtn.onclick = function prevBtnClick (){
    if (count > 1) {
        count = count - 1
        showPokemons()
    }
}

nextbtn.onclick = function nextBtnClick () {
    if (count < 650) {
        count = count + 1
        showPokemons()
    }
}

showPokemons()
