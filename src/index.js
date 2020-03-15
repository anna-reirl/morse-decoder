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
    var lettersCodes=[];
    var decodeSent='';
    var decodeLetter='';
    for(var i = 0; i < expr.length; i+=10){
        lettersCodes.push(expr.slice(i,i+10));
    }
    lettersCodes.forEach(element => {
        decodeLetter = '';
        if(element == '**********'){
            decodeSent += ' ';
        }else{
            for(var i = 0; i < element.length; i+=2){
                if(element.slice(i,i+2) == '10'){
                    decodeLetter += '.';
                }else if(element.slice(i,i+2) == '11'){
                    decodeLetter += '-';
                }
            }
            for(var key in MORSE_TABLE){
                if(decodeLetter == key){
                    decodeSent += MORSE_TABLE[decodeLetter];
                }
            }
        }
    });

    return decodeSent;
}


module.exports = {
    decode
}