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
    let arr = expr.match(/[\d,*]{1,10}/g);
    return arr.reduce((result, elem, i) => {
        if (i === 1) {
            result = MORSE_TABLE[arr[0].replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '')]
        }
        if (elem === '**********') {
            return result += ' '
        }
        return result += MORSE_TABLE[elem.replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '')]
    });
}

module.exports = {
    decode
}