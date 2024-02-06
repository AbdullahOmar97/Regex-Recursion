function division(number, dividedBy) {
    if (dividedBy === 0) {
        return ("The number Can't divide by zero");
    }

    let result = 0;
    while (number >= dividedBy) {
        number -= dividedBy;
        result++;
    }

    return result;
}

console.log (division(10, 0))



function pow(x, n) {
    if (n === 0) {
        return 1;
    } else if (n < 0) {
        return 1 / pow(x, -n);
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(10, 2))


function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        let a = 0;
        let b = 1;
        let newNum;

        for (let i = 2; i <= n; i++) {
            newNum = a + b;
            a = b;
            b = newNum;
        }

        return b;
    }
}

console.log(fibonacci(9))