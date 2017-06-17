const _assert = require('assert');
const _modhex = require('../modhex');

const testinput_hex = '778133dc9cda56e226266823844f79d6d2ec03b8e29ec282df4b54c5676d853e220976b196b188c5834b135dc124d38c';
const testinput_hex_r = 'iijbeetrkrtlghuddhdhhjdejffvikthtdurcenjudkurdjdtvfngfrghihtjgeuddckihnbkhnbjjrgjefnbegtrbdftejr';

// encode data to modhex
describe('encode', function(){

    it('should return a modhex string (hex input)', function(){
        const data = _modhex.encode(testinput_hex);

        // valid return type ?
        _assert.equal(typeof data, 'string');

        // valid modhex string ?
        _assert.equal(data, testinput_hex_r);
    });

    it('should return a modhex string (buffer input)', function(){
        const data = _modhex.encode(Buffer.from(testinput_hex, 'hex'));

        // valid return type ?
        _assert.equal(typeof data, 'string');

        // valid modhex string ?
        _assert.equal(data, testinput_hex_r);
    });

    it('should throw an exepction if input has an odd length', function(done){
        try{
            _modhex.encode('1A1B1C1');

            done(new Error('Unexcepted Result'));
        }catch(e){
            done();
        }
    });
});
