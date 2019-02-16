const {
    db
} = require('./firestore');
const config = require('./config.json');

const collectionName = `${config['user-settings'].username}-Snippets`;

function Add(model) {
    db.collection(collectionName).doc(model.name).set(model);
}

module.exports = {
    Add
}