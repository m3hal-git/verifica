const { calcolaSconto, calcolaIva } = require('./calcoli.js');

const args = process.argv.slice(2);
const importoBase = parseFloat(args[0]);
const operazione = args[1];
const percentuale = parseFloat(args[2]);

if (operazione === 'sconto') {
    const sconto = calcolaSconto(importoBase, percentuale);
    const prezzoScontato = importoBase - sconto;
    console.log(`Prezzo scontato: ${prezzoScontato}`);
} else if (operazione === 'iva') {
    const iva = calcolaIva(importoBase, percentuale);
    const prezzoConIva = importoBase + iva;
    console.log(`Prezzo con IVA: ${prezzoConIva}`);
}

module.exports = { calcolaSconto, calcolaIva };

