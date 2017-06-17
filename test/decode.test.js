const _assert = require('assert');
const _modhex = require('../modhex');

const testinput_hex = '778133dc9cda56e226266823844f79d6d2ec03b8e29ec282df4b54c5676d853e220976b196b188c5834b135dc124d38c';
const testinput_hex_r = 'iijbeetrkrtlghuddhdhhjdejffvikthtdurcenjudkurdjdtvfngfrghihtjgeuddckihnbkhnbjjrgjefnbegtrbdftejr';

// decode data from modhex
describe('decode', function(){

    it('should return a hex string (modhex input; default encoding)', function(){
        const data = _modhex.decode(testinput_hex_r);

        // valid return type ?
        _assert.equal(typeof data, 'string');

        // valid modhex string ?
        _assert.equal(data, testinput_hex);
    });

    it('should return a hex string (modhex input; forced hex encoding)', function(){
        const data = _modhex.decode(testinput_hex_r, 'hex');

        // valid return type ?
        _assert.equal(typeof data, 'string');

        // valid modhex string ?
        _assert.equal(data, testinput_hex);
    });

    it('should return a hex string (modhex input; invalid encoding)', function(){
        const data = _modhex.decode(testinput_hex_r, 'unKN0Wn');

        // valid return type ?
        _assert.equal(typeof data, 'string');

        // valid modhex string ?
        _assert.equal(data, testinput_hex);
    });

        it('should return a Buffer (modhex input; buffer encoding)', function(){
        const data = _modhex.decode(testinput_hex_r, 'buffer');

        // valid return type ?
        _assert.equal(typeof data, 'object');

        // valid ?
        _assert.equal(data.toString('hex'), testinput_hex);
    });

    it('should throw an exepction if input has an odd length', function(done){
        try{
            _modhex.decode('1A1B1C1');

            done(new Error('Unexcepted Result'));
        }catch(e){
            done();
        }
    });
});
