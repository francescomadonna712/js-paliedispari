let bet = prompt('scommetti, pari o dispari?');
let numUtn = parseInt(prompt('inserisci numero da 1 a 6'));

if (numUtn < 7) {
    alert ('giochiamo;)')
    let cpu = random();
    let somma = cpu + numUtn;
    console.log(numUtn, cpu, somma);


if (bet == pariOrDispari(somma)) {
    alert('Utn Win');

} else {
    console.log('cpu win')
}
} else {
    alert('numero non corretto')
}

function random() {
    let cpu = Math.floor(Math.random() * 6) + 1;
    console.log(cpu);
    return cpu;
}

function pariOrDispari(numero) {
    let risultato = 'dispari';
    if (numero % 2 == 0) {
        risultato = 'pari';
    }
}

console.log(risultato);



