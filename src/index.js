const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    var morseWord = [];

    for (let i = 0; i < expr.length; i += 10) {
        var substring = expr.substr(i, 10);
        var morseSymbol = passWord(substring);
        if (morseSymbol === " ") {
            morseWord.push(morseSymbol);
        } else {
            morseWord.push(MORSE_TABLE[morseSymbol]);
        }
    }
    return morseWord.join('');
}

function passWord(substring) {
    let morseLetter = "";

    if (substring === "**********") {
        return " ";
    }

    for (let i = 0; i < substring.length; i += 2) {
        var letter = substring.substr(i, 2);

        if (letter === "10") {
            morseLetter += ".";
        } else if (letter === "11") {
            morseLetter += "-";
        }
    }
    return morseLetter;
}

module.exports = {
    decode
}