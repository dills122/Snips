const {db} = require('./localdb');
const { ExecuteAdd : insertCloud}  = require('./fsdb');
const config = require('./config.json');
const {BuildModel} = require('./models/snippet-model');
//Add firebase too

function ExecuteAdd(snippet, args) {
    let model = BuildModel(snippet, args);

    if(Object.keys(model).length !== 0) {
        db.insert(model, (err, doc) => {
            console.log('local inserted');
        });
        if(config['user-settings'].cloud) {
            insertCloud(model);
            console.log('firestore inserted');
        }
    }
    return true;
}

module.exports = {
    ExecuteAdd
}