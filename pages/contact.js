emailjs.init("PUBLIC_KEY_EMAILJS");

document.querySelector(".contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email-sorgente").value;
    const oggetto = document.getElementById("oggetto").value;
    const messaggio = document.getElementById("messaggio").value;

    const params = {
        email_sorgente: email,
        oggetto: oggetto,
        messaggio: messaggio
    };

    emailjs.send("SERVICE_ID", "TEMPLATE_ID", params)
        .then(() => {
            alert("Email inviata con successo");
        })
        .catch(() => {
            alert("Errore durante l'invio dell'email");
        });
});
