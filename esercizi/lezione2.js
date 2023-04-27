// creo una variabile
let x = 10

// stampare in output il valore della variabile x
console.log( x );

// prendi l'elemento con id 'box'
const elBox = document.getElementById('box')
let n = 1

// impostare l'evento click sull'elemento
elBox.addEventListener('click', function() {

    // al click, modifica il colore di sfondo
    elBox.style.backgroundColor = 'pink'
    elBox.innerHTML = 'Hai cliccato ' + n + ' volte'

    n = n + 1
})


const listItems = document.querySelectorAll('ul#list1 li')

console.log( listItems );

listItems.forEach(
    function(el, i) {

        console.log( "sono qui all'indice " + i );

        // elemento pari
        if( i % 2 == 0 ) {
            el.style.backgroundColor = 'pink'
        }
        // elemento dispari
        else {
            el.style.backgroundColor = 'green'
        }

        if( i == 1 ) {
            console.log( '-----sono all\'indice ' + i + ' quindi scrivo CIAO' );

            el.addEventListener('click', function() {
                el.style.backgroundColor = 'blue'
                el.style.color = 'white'
                el.style.fontSize = '30px'
            })

        }
    }
)