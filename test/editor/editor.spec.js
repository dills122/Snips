const assert = require('assert');
const sinon = require('sinon');
const {
    OpenEditor,
    deps
} = require('../../src/editor-n');

describe('Editor', () => {
    var readFileStub;
    describe('::ExtractResult', () => {
        it('Given filePath should return a value from file', (done) => {
            readFileStub = sinon.stub(deps, 'readFile');
            readFileStub.returns('value');
            deps.ExtractResult('').then((value) => {
                assert.equal(value, 'value');
            });
            done();
        });
    });

    describe('Editor::OpenEditor', () => {
        it('Open code editor and return result', (done) => {
            let launchEditorStub = sinon.stub(deps, 'LaunchEditor');
            launchEditorStub.returns({
                path: ''
            });
            let editor = OpenEditor().then((value) => {
                assert.equal(value, 'value');
                assert.doesNotReject(editor);
                assert(launchEditorStub.calledOnce);
            });
            done();
        });
    });
});