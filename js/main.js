
function userHasFinishDataCompletion(event) {
    event.preventDefault();

    let nameSurname = document.getElementById("nameSurname").value;
    let km_da_percorrere = document.getElementById("km_da_percorrere").value;
    let age = document.getElementById("age").value;

    km_da_percorrere = parseFloat(km_da_percorrere);

    // IL PREZZO DEL BIGLIETTO E' DEFINITO IN BASE AI KM (0.21 € al km)

    let regularPrice = km_da_percorrere * 0.21;

// APPLICA UNO SCONTO DEL 20% PER I MINORENNI e 40% per gli over 65

    if(age == "minorenne") {
    regularPrice -= (regularPrice * 0.2);
    } else if (age == "over65") {
    regularPrice -= (regularPrice * 0.4);
    }

 // PREZZO FINALE CON DUE DECIMALI

    let finalPrice = regularPrice.toFixed(2);

    console.log(finalPrice);



    let ticket = document.getElementById("ticket");

    ticket.classList.remove("d-none");

    document.getElementById("nome_cognome").innerHTML = nameSurname;

    document.getElementById("finalPrice").innerHTML = finalPrice;
    

}

   

   





