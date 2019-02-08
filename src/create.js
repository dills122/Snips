const {db} = require('./localdb');
const { ExecuteAdd : insertCloud}  = require('./fsdb');
//Add firebase too

function ExecuteAdd(name, args) {
    let model = CreateModel(name, args);
    db.insert(model, (err, doc) => {
        console.log('inserted');
    });
    insertCloud(name, args);
}

//Temp till I find good model to use instead
function CreateModel(name, args) {
    return {
        name: name,
        type: args.type || '',
        version: args.version || 1
    };
}

module.exports = {
    ExecuteAdd
}