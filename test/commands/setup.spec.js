const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const assert = require('assert');
const {
    PrintConfig,
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

    it('Should read a file and print its results', (done) => {
        const readFileStub = sinon.stub(deps, 'ReadFile');
        readFileStub.returns('value').withArgs('/config.json');

        var prms = PrintConfig().then(() => {
            assert(readFileStub.calledOnce);
            assert.doesNotReject(prms);
        });
        done();
    });
});