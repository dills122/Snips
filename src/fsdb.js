const {
    db
} = require('./firestore');
const config = require('./config.json');

const collectionName = `${config['user-settings'].username}-Snippets`;

function Add(model) {
    db.collection(collectionName).doc(model.name).set(model);
}
function Get(model) {
    return db.collection(collectionName).doc(model.name);
}
function Update(args, utdObj) {
    let objRef = Get(args);
    objRef.update(utdObj).then(() => {
        console.log('Updated');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = {
    Add,
    Update,
    Get
}