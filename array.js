// 1. Ritornare solo le città che hanno una temperatura sopra i 20 gradi
// 2. Ritornare solo la prima città che ha una temperatura minore di 25 gradi

const weathers = [
    {city: "Milano", temp: 12},
    {city: "Roma", temp: 20},
    {city: "Napoli", temp: 24},
    {city: "Palermo", temp: 28}
];

// Per risolvere questo esercizio abbiamo utilizzato due strade diverse. Per prima abbiamo visto come risolverlo con un semplice ciclo for of. 
// Cosa fa il ciclo for of? Crea un'iterazione (ciclo) su tutti gli elementi iterabili presenti (oggetti, array-like objects, stringhe, ect)
// Oltre un ciclo però, abbiamo anche bisogno di un blocco condizionale, perché dobbiamo verificare una codizione (temperatura sopra i 20 gradi)

function getHottestCity(cities) {
  let hottestCities = [];
  
  for (let city of cities) {
    if(city.temp > 20) {
      hottestCities.push(city)
    }
  }
  
  return hottestCities
}

console.log(getHottestCity(weathers));

// In questo caso ci siamo appogiati ad un array, per pushare ogni città che rispetta la nostra condizione e ritornare appunto, l'array di città
// Vediamo invece come poteva essere semplicemente scritto con il metodo filter degli array

let hottestCities = weathers.filter((city) => city.temp > 20)
console.log(hottestCities)

// Allo stesso modo possiamo risolvere il secondo esercizio, utilizzando il metodo degli array find
let firstHottestCity = weathers.find((city) => city.temp < 25)
console.log(firstHottestCity)

-----------------------------------------------------------------------------
