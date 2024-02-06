
function capitalA(s) {
    let isAlphaOnly = /^[a-zA-Z]+$/.test(s);

    let endCapitalA = s.endsWith('A');

    return isAlphaOnly && endCapitalA;
}


console.log(capitalA("AbdullahA"));




function ioEmail(email) {
    let endIO = email.endsWith('.io');

    return endIO;
}

console.log(ioEmail("example@example.io"));