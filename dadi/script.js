var giocatore =prompt("Giocatore 1 lancia il dado");
var lancioG = Math.floor(Math.random()*6)+1;
var computer= prompt("Ora tocca al Computer")
var lancioC = Math.floor(Math.random()*6)+1;

if (lancioG>lancioC){
  console.log("Giocatore 1 hai vinto");


}else {
console.log("Il Computer ha vinto");

}



console.log(lancioG);
console.log(lancioC);
