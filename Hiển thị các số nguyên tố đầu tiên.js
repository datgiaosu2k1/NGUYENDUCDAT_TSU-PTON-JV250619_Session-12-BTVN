let count = 0;
let number = 1;
while (count < 20) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime && number > 1) {
        console.log(number);
        count++;
    }
    number++;
}