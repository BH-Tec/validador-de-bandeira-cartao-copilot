import validateCreditCard from "./utils/validador-bandeira.js";

const testCards = [
    '4532123456788888',  // VISA (16 dígitos)
    '5555555555554444',  // Mastercard
    '371449635398431',   // American Express
    '6011111111111117',   // Discover
    '30569309025904',    // Diners Club
    '3530111333300000',  // JCB
    '9062825649040404',  // Invalido
];

testCards.forEach(cardNumber => {
    const result = validateCreditCard(cardNumber);
    console.log(`Card: ${cardNumber}`);
    console.log('Result:', result);
    console.log('------------------------');
});

