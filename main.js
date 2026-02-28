// nome repo: js-fizzbuzz

// Consegna:
// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// Prima di partire a scrivere codice poniamoci qualche domanda:
// Come faccio a sapere se un numero è divisibile per?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// Consigli del giorno:
// scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

//////////////////////////////////////////////////////////////////////////////

// utilizziamo un ciclo for per stampare i numeri da 1 a 100

for (i = 1; i <= 100; i++) {
    // console.log(i);


// definiamo i multipli di 3 (i % 3 == 0) ➡️ stampiamo Fizz

    if (i % 3 == 0) {
        const i = 'Fizz';
        console.log(i);
    }

    // definiamo i multipli di 5 (i % 5 == 0) ➡️ stampiamo Buzz

    if (i % 5 == 0) {
        const i = 'Buzz'; 
        console.log(i);
    }

// definiamo una condizione che comprende entrambe le precedenti
// (utlizziamo l'operatore logico &&, se è true allora stampiamo il numero i)
// stampiamo ➡️ FizzBuzz
    if (i % 3 == 0 && i % 5 == 0) {
        const i = 'FizzBuzz';
        console.log(i);
        
    }

} // chiudiamo il ciclo for