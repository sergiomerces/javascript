function parimpar(num) {
    if (num % 2 === 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}

let res = parimpar(10);

console.log(`O número é ${res}!`);