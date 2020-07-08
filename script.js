var listaMail = ["andrea@mail.it" , "luca@mail.it" , "michelle@mail.it" , "nicolo@mail.it"];

var mail = prompt("Inserisci la tua e-mail");

for (var i = 0; i < listaMail.length; i++) {
    if (mail == listaMail[i]) {
        alert("Credenziali corrette");
        
    }
    else {
        alert("ERRORE");
    }
}
