let inputRuze = document.getElementById("ruze");
let inputLjiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");

let inputBombonjera = document.getElementById("dpok1");
let inputCokolada = document.getElementById("dpok2");
let inputSampanjac = document.getElementById("dpok3");

let inputKes = document.getElementById("kes");
let inputKartica = document.getElementById("kartica");

let btnIzracunaj = document.getElementById("izracunaj");
let btnReset = document.getElementById("reset");

let ispis = document.getElementById("ispis");

btnIzracunaj.addEventListener("click", () => {
    let s1 = "<img src='slike/ruza.png' width='50px'>";
    let s2 = "<img src='slike/ljiljan.jpg' width='50px'>";
    let s3 = "<img src='slike/gerber.png' width='50px'>";
    let cena = 0;
    ispis.innerHTML = 
    `<h3>Vaša porudžbina:</h3>`
    if(inputRuze.value > 0) {
        for(let i = 0; i < inputRuze.value; i++) {
            ispis.innerHTML += s1;
        }
        ispis.innerHTML += "<br>"
        cena += inputRuze.value * 150;
    }

    if(inputLjiljani.value > 0) {
        for(let i = 0; i < inputLjiljani.value; i++) {
            ispis.innerHTML += s2;
        }
        ispis.innerHTML += "<br>"
        cena += inputLjiljani.value * 120;
    }

    if(inputGerberi.value > 0) {
        for(let i = 0; i < inputGerberi.value; i++) {
            ispis.innerHTML += s3;
        }
        ispis.innerHTML += "<br>"
        cena += inputGerberi.value * 70;
    }

    if(inputBombonjera.checked == true) {
        ispis.innerHTML += "<p style='color:purple'>+ Bombonjera</p>"
        cena += 500;
    }

    if(inputCokolada.checked == true) {
        ispis.innerHTML += "<p style='color:purple'>+ Čokolada</p>"
        cena += 500;
    }

    if(inputSampanjac.checked == true) {
        ispis.innerHTML += "<p style='color:purple'>+ Šampanjac</p>"
        cena += 500;
    }

    if(inputKartica.checked == true && cena >= 2000) {
    ispis.innerHTML += `<p style='color:purple'>Cena bez popusta je: ${cena}</p>
    <p style='color:purple; font-size: 20px; margin-top: 10px'>Cena sa popustom je: ${cena - (cena / 100 * 10)}</p>`
    }
    else {
        ispis.innerHTML += `<p style='color:purple'>Cena bez popusta je: ${cena}</p>`
    }
});

btnReset.addEventListener("click", () => {
    ispis.innerHTML = '';
})