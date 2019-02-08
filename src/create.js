const {db} = require('./localdb');
const { ExecuteAdd : insertCloud}  = require('./fsdb');
const config = require('./config.json');
//Add firebase too

function ExecuteAdd(name, args) {
    let model = CreateModel(name, args);
    db.insert(model, (err, doc) => {
        console.log('local inserted');
    });
    if(config['user-settings'].cloud) {
        insertCloud(name, args);
        console.log('firestore inserted');
    }
}

//Temp till I find good model to use instead
function CreateModel(name, args) {
    return {
        name: name,
        type: args.type || '',
        version: args.version || 1,
        snippet: args.snippet || ''
    };
}

module.exports = {
    ExecuteAdd
}