/* 
- Recupero scelta Nome dall'utente
- Recupero scelta del numero di Km da percorrere dall'utente
- Recupero scelta Età dall'utente
- Validazione inserimento Dati Utente

- Definire il prezzo del biglietto (0,21 € al KM)
- Calcolo eventuale scontistica del prezzo finale

- Calcolare il prezzo Finale del biglietto + Output con massimo 2 decimali stampato su pagina
*/

const userName = document.getElementById("user-name");
const userKm = document.getElementById("user-km");
const userAge = document.getElementById("user-age");
const createTicketBtn = document.getElementById("create-ticket-btn");
const resetBtn = document.getElementById("reset-btn");
const userTicket = document.getElementById("user-ticket");
const ticketName = document.getElementById("ticket-name");
const ticketDiscount = document.getElementById("ticket-discount");
const ticketCab = document.getElementById("cab");
const ticketCpCode = document.getElementById("cp-code");
const ticketFinalPrice = document.getElementById("ticket-final-price");
const validationMessage = document.getElementById("validation-message");

createTicketBtn.addEventListener ('click', function() {
  const name = userName.value;
  const km = parseInt(userKm.value);
  const age = userAge.value;

  if (!isNaN(name) || isNaN(km) || km <= 0) {
    validationMessage.innerText = "Ops! Non hai inserito correttamente i dati, riprova."
    validationMessage.classList.add ("error");
    validationMessage.classList.remove ("correct");
    ticketFinalPrice.innerText = "Non calcolabile"
    userTicket.classList.add ("d-none");
    userTicket.classList.remove ("d-block");
  } else {
    validationMessage.innerText = "Hai inserito correttamente tutti i dati, il tuo Biglietto è pronto!"
    validationMessage.classList.add ("correct");
    validationMessage.classList.remove ("error");

    userTicket.classList.remove ("d-none");
    userTicket.classList.add ("d-block");
    userName.value = "";
    userKm.value = "1";
    userAge.value = "adult";
    ticketName.innerText = name;
    let price = 0.21 * km;

    let discountMessage = "Biglietto adult";
    if (age === "minor") {
      price *= 0.5;
      discountMessage = '<span class="correct">Sconto -50%</span>';
    } else if (age === "elder") {
      price *= 0.6;
      discountMessage = '<span class="correct">Sconto -60%</span>';
    }

    ticketDiscount.innerHTML = discountMessage;

    let resultCab = Math.floor(Math.random() * 20) + 1;
    let resultCpCode = Math.floor(Math.random() * 99999) + 1;

    ticketCab.innerText = resultCab;
    ticketCpCode.innerText = resultCpCode;
    ticketFinalPrice.innerText = price.toFixed(2) + "€";
    }
});

resetBtn.addEventListener('click', function(){
  userName.value = "";
  userKm.value = "1";
  userAge.value = "adult";
  userTicket.classList.remove ("d-block");
  userTicket.classList.add ("d-none");
  validationMessage.innerText = "Compila correttamente tutti i campi";
  validationMessage.classList.remove ("error");
  validationMessage.classList.remove ("correct");

})