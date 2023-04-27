// // MINI TEST

// {
// let n = 42
// function print(n) {
//   console.log(n)
// }
// print(10)
// }

// // stampa 10

 {

    // 2 - fill in the blanks
    function find(arr, n) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i]==n) {
          return i
        }
      }
      return -1
    }

    find([3,2,1],1)

 }

// {
// // 3 - 1 or 2?
// function wat(a) {
//     if (!a) {
//       return 1
//     }
  
//     return 2
//   }
//   wat()
// }

 {
     // 4 - truthy and falsey
     // a è undefined. E' un falsey value quindi se è !a (not falsey) è true. Con l'or se almeno uno è true l'if è true. Entra nell'if e stampa 1. 
     // Con l'operatore || il contesto è booleano di true o false a destra e a sinistra. 'a' e 'hi' devono essere osservate dal punto di vista dei falsey e truthy value (e non come stringhe). Non essendo falsey, sono automaticamente truthy. 
     let a
     if (!a || 'hi') {         
     console.log(1)
     } else {
     console.log(2)
     }
 }

// {
//     // 5 - what will be printed?
//     // La risposta è "a1" perchè quando c'è l'operatore + e quindi la somma di almeno una stringa assieme a dei numeri, i numeri vengono trattati come stringhe. 

//     function plus(n, m) {
//         return n + m
//     }
//     console.log(plus("a", 1))
// }

// {
//     // 6 - functional fill in the blanks
//     // la risposta è: return op(n,m) dove op è la funzione anonima "function(a,b)" che è una funzione in una funzione. 
//     function calc(op, n, m) {
//     return ?
//     }
//     console.log(calc(function(a, b) { return a + b}, 1, 2) // should return 3
//     console.log(calc(function(a, b) { return a - b}, 4, 3) // should return 1
// }

// {
//     // 7 - what will be printed?
//     // Ritorna 1, 2 e 3 perchè è una funzione che ritorna una funzione e ogni volta aggiunge 1 ad n che parte da zero quindi 0+1, 1+1, 2+1
//     function x(n) {
//         return function() { return ++n }
//     }
//     let y = x(0)
//     console.log(y()) // 1
//     console.log(y()) // 2
//     console.log(y()) // 3
// }

{
  // 8 - what will be printed?
  // prima stampa i e poi leva 1. a quel punto incrementa di 1, i torna a zero, viene stampato e poi decrementa di nuovo di 1 ecc. Loop infinito
  for (let i = 0; i < 10; i++) {
      console.log(i--)
      // i--
  }
}

// {
//     // 9 - what will be printed?
//     // entra all'interno dell'if perchè è sempre verificata (è inutile mettere un if in questo modo ma era solo per creare lo scope ai fini dell'esercizio). Siccome la a è definita all'interno dell'if e quindi ha scope soltanto la dentro, il console log di fuori non lo raggiunge e stampa l'errore "a is undefined". 

//     if (true) {
//         let a = 3
//         a++
//     }
//     console.log(a)
// }

// {
// // 10 - what will be printed?
// // il return è all'interno del for quindi esso viene eseguito una volta sola. il max allora ritornerà 2 e non 3 come dovrebbe essere perchè appunto si blocca dopo il primo giro. 
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
// }

console.log("------------------------------------");
// 1204

function calc(op, n, m) {
  return op(n, m)
}
 
function sum(a, b) {
  return a + b
}

// passando la funzione sum alla funzione calc
calc(sum, 2, 40)

// passando il risultato dell'invocazione della funzione sum alla funzione calc
// calc(sum(), 2, 40)
// o scritto un po' piu' verboso
// let thesum = sum()
// calc(thesum, 2, 40)

console.log(sum);
console.log(sum(1,2));


// funzione che dato un array somma tutti i numeri dell'array


function somma(arr){
  let tot = 0
  for (let i = 0; i < arr.length; i++) {
    tot += arr[i]    
  }
  return tot
}

function sottrazione(arr){
  let tot = 0
  for (let i = 0; i < arr.length; i++) {
    tot -= arr[i]    
  }
  return tot
}

function moltiplicazione(arr){
  let tot = 0
  for (let i = 0; i < arr.length; i++) {
    tot *= arr[i]    
  }
  return tot
}


let a1 = [2,4,6,8,10]

function reduce(arr,op){
  let tot = 0
  for (let i = 0; i < arr.length; i++) {
    tot = op(arr[i],tot)   
  }
  return tot
}

function sum(b, c){
  return b + c
}
function sub(b, c){
  return b - c
}
function mul(b, c){
  return b * c
}
function concat(a, b) {
  return a + ", " + b
}
function arr(a, b) {
  return [a, b]
}

reduce(a1, sum)
reduce(a1, sub)
reduce(a1, mul)
console.log(reduce(a1, concat))
