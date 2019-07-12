const assert = require('assert');
const sinon = require('sinon');
const {
    OpenEditor,
    deps
} = require('../../src/editor');

describe('Editor', () => {
    describe('Editor::OpenEditor', () => {
        it('Open code editor and return result', (done) => {
            let launchEditorStub = sinon.stub(deps, 'LaunchEditor');
            launchEditorStub.returns('value');
            let value = OpenEditor();
            assert.equal(value, 'value');
            assert(launchEditorStub.calledOnce);
            launchEditorStub.restore();
            done();
        });
    });
    describe('::LaunchEditor', () => {
        it('Should open an editor and return a value', (done)=> {
            let editStub = sinon.stub(deps, 'edit');
            editStub.returns('value');
            let actual = deps.LaunchEditor();
            assert.equal(actual, 'value');
            assert(editStub.calledOnce);
            done();
        });
    });
});