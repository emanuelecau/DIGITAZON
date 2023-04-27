// 10 - what will be printed?
// let arr = [1,2,3]
// function max(arr) {
//   let max = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//     return max
//   }
// }
// console.log(max([1,2,3]))

// 5 - what will be printed?
// function plus(n, m) {
//     return n + m
//   }
//   console.log(plus("a", 1))

// 9 - what will be printed?
// if (true) {
//     let a = 3
//     a++
//   }
//   console.log(a)
// 6 - functional fill in the blanks

function calc(op, n, m) {
    return ?
  }
  console.log(calc(function(a, b) { return a + b}, 1, 2) // should return 3
  console.log(calc(function(a, b) { return a - b}, 4, 3) // should return 1


  // 7 - what will be printed?
function x(n) {
    return function() { return ++n }
  }
  let y = x(0)
  console.log(y()) // ?
  console.log(y()) // ?
  console.log(y()) // ?

  //esempio di funzionalità del for loop con due istruzioni interne + una funzione nel terzo blocco del for 

  for(let i = 1, j = 2; i <= 10 && j <= 20; i++, j += 2, fn(i-1) ) {
  console.log( i + ' ' + j )
}

function fn( n ) {
  console.log( 'iterazione ' + n )
}

//// gotta love Functional Programming
// su questo sono uscito un po' dal tracciato per dare possibilita' anche a quelli che gia' 
// programmavano, o che vogliono una sfida leggermente piu' avanzata, per cimentarsi
function T() { return true }
function F() { return false }
function and(sx, dx) {
  return function() { return sx() && dx() }
}
function or(sx, dx) {
  return function() { return sx() || dx() }
}
console.log(and(or(F, T), T)())

// scrivere una funzione chiamata chessboard
// che prende in ingresso un numero l,
// la funzione deve stampare una scacchiera di lato l
// contenente '#' e ' ', opportunamente alternati

//PSEUDO CODICE 
//creo la funzione chessboard
//cosa posso fare per far stampare una scacchiera inserendo un solo numero come parametro
// quel numero dovrà avere una stretta relazione con la grandezza e modularizzazine della scacchiera 
// creare quindi un ciclo for che analizza il numero del parametro dove la sua interruzione è uguale aal numero stesso
// creare un if che definisca in base a pari e a dispari una precisa stampa di cancelletti e spazi
// il numero di volte che verranno stampati dev essere uguale al numero stesso 
// se il numero è dispari stampare ad esempio # - # quante volte il numero stesso 
// se il numero è pari stampare il contrario della prima 