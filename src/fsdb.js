const {db} = require('./firestore');

function ExecuteAdd(name, args) {
    let model = CreateModel(name, args);
    let setDoc = db.collection('Snippets').doc(name).set(model);
}

function CreateModel(name, args) {
    return {
        name: name,
        type: args.type || '',
        version: args.version || 1
    };
}

module.exports =  {
    ExecuteAdd
}