function calcolaSconto(importo, percentuale) {
    return importo * (percentuale / 100);
}

function calcolaIVA(importo, percentualeIVA) {
    return importo * (percentualeIVA / 100);
}

module.exports = {
    calcolaSconto,
    calcolaIVA
};
