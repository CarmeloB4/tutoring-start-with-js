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

console.log("for of solution",getHottestCity(weathers));

// In questo caso ci siamo appogiati ad un array, per pushare ogni città che rispetta la nostra condizione e ritornare appunto, l'array di città
// Vediamo invece come poteva essere semplicemente scritto con il metodo filter degli array

let hottestCities = weathers.filter((city) => city.temp > 20)
console.log("filter solution", hottestCities)

// Allo stesso modo possiamo risolvere il secondo esercizio, utilizzando il metodo degli array find
let firstHottestCity = weathers.find((city) => city.temp < 25)
console.log("First Hottest City",firstHottestCity)

// -----------------------------------------------------------------------------

//1. Se l'oggetto è false, metti una proprietà type equivalente a "Slow"

const cars = [
    {name: "Audi", isFast: true},
    {name: "Fiat", isFast: false}, 
    {name: "Suzuki", isFast: false},
    {name: "Toyota", isFast: true},
    {name: "Mercedes", isFast: true},
    {name: "Opel", isFast: false},
];

// Per risolvere questo esercizio, non basta un solo metodo degli array, infatti oltre al metodo filter dovremmo utilizzare un map per inserire questa nuova proprietà

function getSlowCars(cars) {
    const filteredCars = cars.filter((c) => !c.isFast);
    const mappedCars = filteredCars.map((f) => ({...f, type: "Slow"}));
    return mappedCars
}

// Con filter abbiamo filtrato tutti gli oggetti con la proprietà 'isFast' false, con il map invece, per ogni oggetto ne abbiamo creato uno nuovo
// Il nuovo oggetto è formato da, le 'vecchie' proprietà dell'oggetto e la nuova proprietà "type: 'Slow'"

console.log("Slow cars", getSlowCars(cars))

// Trovi altre meggiori info nel readme
