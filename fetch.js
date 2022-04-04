// Esempio di una chiamata di rete gestita con fetch
// Per utilizzare fetch, potresti avere bisogno di questa libreria https://www.npmjs.com/package/node-fetch
import fetch from 'node-fetch';

fetch("https://jsonplaceholder.typicode.com/todos/1")
.then((response) => response.json())
.then(result => console.log(result))

// Quando facciamo una chiamata fetch, non abbiamo subito il risultato, ma una promise, per capirci, fetch ritorna una promise
// Il metodo json applicato alla response, ci serve per 'estrarre' dalla chiamata solo la response che ci interessa e non tutta l'http request
// A sua volta il metodo json ritorna una promise che restituisce il json della risposta

// Oltre questo, al metodo fetch possiamo anche passare un oggetto a seconda dei casi della nostra chiamata
// Per vedere il protocollo delle chiamate di rete e a cosa serve l'headers guarda il readme

fetch("https://jsonplaceholder.typicode.com/todos/1", {
    method: 'GET',
    headers: { "Content-type": "application/json" }
})
.then((response) => response.json())
.then(result => console.log(result))