# Promises 🔀
Partiamo con la definizione di promise: La promise è un oggetto che può produrre un unico valore in futuro. Questo valore può essere una resolve (tutto andato a buon fine) o una reject. Perché in futuro? Perché tramite le promise noi possiamo andare a gestire gli eventi asincroni. <br>
Nel nostro esercizio, abbiamo gestito la promise in due modi diversi. <br>

<hr>
<br>
## then()
Nel primo esempio abbiamo gestito la promise con i metodi che abbiamo a disposizione, then, catch e finally. Questi ci permettono di gestire la asincronicità della chiamata ed evenutali errori (catch)
<br><br>
## Async/await
Nel secondo esempio abbiamo gestito l'asincronicità con async/await, quindi, la nostra funzione non si completerà fin quando la promise sarà conclusa. Abbiamo anche inserito un blocco try/catch per gestire il caso di reject ed il finally per segnalare il completamento della gestione della nostra promise
