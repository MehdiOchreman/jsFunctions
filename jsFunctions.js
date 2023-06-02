////////////////////////////////////////////////keeping these here lol/////////////////////////////////////////////////////


function isPrime(num) {
    var arr = []
    for (i = 1; i <= num; i++) {
        if ((num / i) % 1 === 0) {
            arr.push(i)
        }
    }
    if (arr.length == 2) {
        return true
    }
    else {
        return false
    }
}

function leastCommonMultiple(num1, num2) {
    if ((typeof num1 !== 'number') || (typeof num2 !== 'number'))
        return false;
    return (!num1 || !num2) ? 0 : Math.abs((num1 * num2) / greatestCommonDenominator(num1, num2));
}

function greatestCommonDenominator(num1, num2) {
    x = Math.abs(num1);
    y = Math.abs(num2);
    while (num2) {
        var t = num2;
        num2 = num1 % num2;
        num1 = t;
    }
    return num1;
}

function dynamicFizzBuzz(max, num1, num2) {
    for (i = 1; i < max; i++) {
        if (i % (num1 * num2) === 0) {

        }
        else if (i % num1 === 0) {
            console.log(i)
        }
        else if (i % num2 === 0) {
            console.log(i)
        }
    }
}

function fizzBuzz(max) {
    for (i = 1; i < max; i++) {
        if (i % 15 === 0) { }
        else if (i % 3 === 0) {
            console.log(i)
        }
        else if (i % 5 === 0) {
            console.log(i)
        }
    }
}

function logBetweenStepper(min, max, step) {
    for (i = min; i <= max; i += step) {
        console.log(i)
    }
}

function printFives(max) {
    for (i = 0; i < max; i += 5) {
        console.log(i)
    }
}

function printFives2(max) {
    for (i = 0; i < max; i++) {
        if (i % 5 === 0) {
            console.log(i)
        }
    }
}

function logBetween(lowNum, highNum) {
    for (i = lowNum; i <= highNum; i++) {
        console.log(i)
    }
}

function isPerfectSquare(num) {
    let arr = []
    let x = num / 2
    for (i = 0; i <= x; i++) {
        arr.push(i * i)
    }
    if (arr.indexOf(num) > -1 || num == 1) {
        return true
    }
    else {
        return false
    }
}

function fibonacci(length) {
    let arr = []

    while (arr.length < 2 && length >= 1) {
        arr.push(1)
        if (length == 1) {
            break
        }
    }

    while (arr.length < length && arr.length > 1) {
        xi = arr.length - 2
        yi = arr.length - 1
        z = arr[xi] + arr[yi]
        arr.push(z)


    }

    return arr

}

function pigLatinWord(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    if (vowels.indexOf(word[0]) > -1) {
        word = word + 'yay'
    }
    if (vowels.indexOf(word[0]) == -1) {
        for (i = 0; i < word.length; i++) {
            if (vowels.indexOf(word[i]) > -1) {
                nStr = word.slice(i)
                word = nStr + word[i - 1] + 'ay'
                break
            }
        }
    }

    return word
}

function abbreviate(word) {
    var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']
    let wrd = []
    for (i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
        }
        else {
            wrd.push(word[i])
        }
    }
    return wrd.join('')
}

function uncompress(str) {
    iL = 0
    iN = 0
    var nStr = ""
    while (iN < str.length) {
        iN = iL + 1
        l = str[iL]
        n = Number(str[iN])
        for (i = 0; i < n; i++) {
            nStr += l
        }
        iL += 2
    }
    return nStr
}

function tripletTrue(str) {
    for (i = 0; i < str.length; i++) {
        if (str.split(str[i]).length - 1 >= 3) {
            return true
        }
    }
    return false
}

function sillyString(str) {
    vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'O', 'o', 'u', 'U']
    arr = []
    for (i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            arr.push(str[i] + 'b' + str[i])
        }
        else {
            arr.push(str[i])
        }
    }
    return arr.join('')
}

function moreDotLessDash(str) {
    iDa = 0
    iDo = 0
    for (i = 0; i < str.length; i++) {
        if (str[i] == '-') {
            iDa += 1
        }
        else if (str[i] == '.') {
            iDo += 1
        }
    }
    if (iDo > iDa) {
        return true
    }
    else {
        return false
    }
}

function hasThreeVowels(str) {
    count = 0
    countArr = []

    vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'O', 'o', 'u', 'U']
    for (i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            countArr.push(str[i])
        }
    }
    let countSet = [...new Set(countArr)]
    count = countSet.length
    if (count >= 3) {
        return true
    }
    else {
        return false
    }
}

function lastIndex(str, char) {
    for (i = str.length; i > 0; i--) {
        if (str[i] == char) {
            return i
        }
    }
}

function doubleLetterCount(string) {

    var count = 0
    for (i = 0; i < string.length - 1; i++) {
        let i2 = i + 1
        if (string[i] == string[i2]) {
            count += 1
        }
        else {
            count += 0
        }
    }
    return count
}

function caesarCipher(string, num) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var nStr = []
    for (i = 0; i < string.length; i++) {
        indexInAlphabet = alphabet.indexOf(string[i])
        newIndex = indexInAlphabet + num
        if (newIndex > 26) {
            newIndex = newIndex - 26
        }
        nStr.push(alphabet[newIndex])
    }
    return nStr.join('')
}
