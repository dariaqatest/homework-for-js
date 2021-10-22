// // task 1

function pinCodeGenerator(length) {

    let rnd = '';

    while (rnd.length < length)
    {
        rnd += Math.random().toString().substr(2, 16);
    }

    return rnd.substr(2, length);
}

let newPin = pinCodeGenerator(16);

// 16 - количество цифр, которое выдает данная функция (работает и с 50, и со 100 цифрами)

// task 2

function validatePhoneNymber(number) {
    let regEx = new RegExp('(\\d{3}\\s\\d{3}\\s\\d{4}|\\d{10})');

    let result = regEx.exec(number);

    return result != null ? true : false;
}


let a = validatePhoneNymber('067 734 4343');// → true
let b = validatePhoneNymber('094 643 7432');// → true
let c = validatePhoneNymber('083 jfvj 4554');// → false
let d = validatePhoneNymber('Anton0938 884');// → false
let e = validatePhoneNymber('0437348348');// → true

// task 3

const arr = [
    "НПП Прізвище Кіл-ть Приблизно",
    "______________________в_ базіпо_Україні",
    "0-rt-rgfr", "8484fjdfkf",
    "МЕЛЬНИК",
    "ШЕВЧЕНКО",
    "БОЙКО",
    "КОВАЛЕНКО",
    "БОНДАРЕНКО",
    "ТКАЧЕНКО",
    "КОВАЛЬЧУК",
    "КРАВЧЕНКО",
    "ОЛІЙНИК"
]

let newArr = arr.reverse();

newArr.pop();
newArr.pop();
newArr.pop();
newArr.pop();

newArr = arr.reverse();

// task 4

const vowelsCounter = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0

    for (letter of str) {
        if (vowels.includes(letter.toLowerCase())) {
            counter++
        }
    }

    return counter
}

let res = vowelsCounter('The current directory is AD-123');
//expected output → 8
//actual output → 7
