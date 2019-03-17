const assert = require('assert');
const sinon = require('sinon');
const {
    OpenEditor,
    deps
} = require('../../src/editor');

describe('Editor', () => {
    var readFileStub;
    describe('Editor::OpenEditor', () => {
        it('Open code editor and return result', (done) => {
            readFileStub = sinon.stub(deps, 'readFile');
            readFileStub.returns('value');
            let launchEditorStub = sinon.stub(deps, 'LaunchEditor');
            launchEditorStub.returns('value');
            let value = OpenEditor();
            assert.equal(value, 'value');
            assert(launchEditorStub.calledOnce);
            done();
        });
    });
});