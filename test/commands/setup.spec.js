const chai = require('chai');
const expect = chai.expect;
const assert = require('assert');
const {
    deps
} = require('../../src/commands/setup');
describe('Commands::Setup', () => {
    it('Given valid schema should return true', (done) => {
        const config = {
            "user-settings": {
                "username": "dills122",
                "cloud": true
            }
        };
        const validate = deps.ValidateInput(config).then((isValid) => {
            chai.assert.isTrue(isValid);
            expect(isValid).to.be.an('boolean');
            assert.doesNotReject(validate);
        });
        done();
    });
});