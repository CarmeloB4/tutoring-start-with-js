// 1. Calcola la media gol di un giocatore
// 2. Utilizzare le closures senza saperlo

function makeAverageGol(match) {
  return function(gol) {
    return gol/match
  }
}

const match = makeAverageGol(20)
const gol = match(15)

console.log(gol)

// In questo primo esempio, vediamo un semplice caso di closures, da definizione, sappiamo che una closures è una funzione che ritorna una funzione che prende un parametro
// Nel secondo caso invece vedremo che in realtà utilizziamo le closures in tantissimi casi senza neanche saperlo

function getData() {
  const data = [1,2,3,4,5]
  return data.map((d) => d * 2)
}

console.log(getData())

// Trovate altre info nel readme
