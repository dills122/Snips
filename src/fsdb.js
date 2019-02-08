const {
    db
} = require('./firestore');
const config = require('./config.json');

function ExecuteAdd(model) {
    let setDoc = db.collection(`${config['user-settings'].username}-Snippets`).doc(model.name).set(model);
}

module.exports = {
    ExecuteAdd
}