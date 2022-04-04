# Fetch 🌐
Intanto prima di vedere cosa fa il metodo fetch, vediamo un attimo il protocollo delle chiamate di rete <br>
<br>
![api](https://github.com/CarmeloB4/tutoring-start-with-js/blob/06-fetch/api.png)
<br>
Per approfondire meglio l'argomento vi lascio un articolo https://www.freecodecamp.org/news/rest-apis/ <br>
Fatta questa analisi, andiamo a vedere cosa faccia il metodo fetch. Fetch fornisce un'interfaccia per il recupero delle risorse (anche attraverso chiamate di rete). <br>
Importante ricordare che fetch ritorna una promise con tutta la risposta della chiamata HTTP
Per estrapolare poi dalla response quello che realmente ci serve (il body), andiamo ad utilizzare un metodo che ci fornisce l'interfaccia Response, il json.
Per approfondire: https://developer.mozilla.org/en-US/docs/Web/API/Response/json
## headers
Quando parliamo di headers, parliamo di un parametro che forniamo alla chiamata di rete per fornire informazioni riguardanti la chiamata di rete che stiamo facendo (il tipo della chiamata, ect)

Articolo di approfondimento sul fetch: https://www.freecodecamp.org/news/javascript-fetch-api-tutorial-with-js-fetch-post-and-header-examples/ <br>
Libreria per utilizzare fetch: https://www.npmjs.com/package/node-fetch
