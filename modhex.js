// modhex mapping base; c.....v => 0x0 ... 0xF
const modhexBase = 'cbdefghijklnrtuv'.split('');

// Convert the Yubico MODHEX encoded Strings to hex
function decode(input, encoding='hex'){

    // strip whitespaces and string cleanup - all non matching characters are 0x00 (c in modhex)
    const modhex = input.replace(/\s*/g, '').replace(/[^cbdefghijklnrtuv]/g, 'c');

    // even length ?
    if (modhex.length%2 !== 0){
        throw new Error('modhex string has no even length (' + modhex.length + ')');
    }
    
    // tmp
    let hexOutput = '';

    // convert each character
    for (let i=0;i<modhex.length;i++){
        // convert index to hex
        hexOutput += modhexBase.indexOf(modhex.charAt(i)).toString(16);
    }

    // output as buffer ?
    if (encoding === 'buffer'){
        return Buffer.from(hexOutput, 'hex');
    }else{
        return hexOutput;
    }
}

// Convert hex Strings to the Yubico MODHEX
function encode(input){

    // hex encoded input string
    let hexInput = '';

    // hex or buffer input ?
    if (typeof input === 'string'){
       
        // strip whitespaces and string cleanup
        hexInput = input.replace(/\s*/g, '').replace(/[^a-f0-9]/gi, '');

        // even length ?
        if (hexInput.length%2 !== 0){
             throw new Error('hex input string has no even length (' + hexInput.length + ')');
        }

    }else{
        // buffer to hex
        hexInput = input.toString('hex');
    }

    // tmp
    let modhexOutput = '';

    // convert
    for (let i=0;i<hexInput.length;i++){
        // convert index to hex
        modhexOutput += modhexBase[(parseInt(hexInput.charAt(i), 16))];
    }

    return modhexOutput;
}

module.exports = {
    encode: encode,
    decode: decode
};