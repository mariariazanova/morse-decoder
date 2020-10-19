const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    let ten = 10;

    while (expr.length >= ten) {
        let letter = expr.slice(0, ten)  //отрезаем фрагмент с 0 до 10
                         .replace(/00/g, '')
                         .replace(/10/g, '.')
                         .replace(/11/g, '-')
                         .replace('**********', ' ')

       
        if (letter !== ' ') {
          result += MORSE_TABLE[letter]
        } else {
          result += ' '
        }

        expr = expr.slice(ten) //убираем проработанный 10-ти символьный фрагмент
    }

    return result;
}

module.exports = {
    decode
}