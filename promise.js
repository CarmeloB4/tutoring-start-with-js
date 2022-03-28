// In questo esercizio andiamo a vedere come gestire una promise in più modi, troverete tutta la parte teorica nel readme

const person = {
    firstName: "Carlo",
    lastName: "Lucano",
    age: 20
}

//Test: riesci a riscrivere da riga 14 a riga 18 in maniera più concisa? 

function getData(obj) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (obj.age >= 20) {
                resolve(obj)
            }else {
                reject("Ops teeneger")
            }
        },1000)
    })
}

// getData(person)
// .then((response) => console.log(response))
// .catch((error) => console.log(error))
// .finally(() => console.log("Completato"))

async function getResponse() {
    try {
        const response = await getData(person);
        console.log(response)
    } catch(err) {
        console.log(err)
    } finally {
        console.log("Completato")
    }
   
}

getResponse()
