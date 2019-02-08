const {db} = require('./firestore');
const config = require('./config.json');

function ExecuteAdd(name, args) {
    let model = CreateModel(name, args);
    let setDoc = db.collection(`${config['user-settings'].username}-Snippets`).doc(name).set(model);
}

function CreateModel(name, args) {
    return {
        name: name,
        type: args.type || '',
        version: args.version || 1,
        snippet: args.snippet || ''
    };
}

module.exports =  {
    ExecuteAdd
}