// numeri da generare

// numeri non duplicabili

var numeri_da_generare = [];

function ottieni_numeri_random (min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

while (numeri_da_generare.length < 16) {
      var numeri_randomizzati = (ottieni_numeri_random(1, 100));


      if (numeri_da_generare.includes(numeri_randomizzati) == false){
          numeri_da_generare.push(numeri_randomizzati);
      }
}

console.log(randomNumbers);

// ****************

var numero_dell_utente = [];

var volte_inserimento_numero = 84;



for (var i = 0; i <= volte_inserimento_numero; i++ ){
    var numero_utente_random = Number(prompt("Inserisci un numero tra 1 e 100"));

    if (numeri_da_generare.includes(numero_utente_random) == true){
        alert("Hai perso. PARTITA TERMINATA");
        break;
    }
    else if (numero_dell_utente.includes(numero_utente_random) == true) {
        alert("Numero già inserito. Prova con un altro");
    }
    else {
        numero_dell_utente.push(numero_utente_random);
    }
}

// **************


alert("PUNTI OTTENUTI: " + numero_utente_random);

if ( i <= volte_inserimento_numero){
    alert("RIPROVA! (AGGIORNA LA PAGINA PER UN NUOVO TENTATIVO)");

} else{
    alert("HAI VINTO! COMPLIMENTI!");
}
