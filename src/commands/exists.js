const {
    db
} = require('../localdb');

function Exists(name) {
    return new Promise((reject, resolve) => {
        db.find({
            name: name
        }, (err, docs) => {
            reject(err);
            if(docs && docs.length > 0) {
                resolve(true);
            } else {
                resolve(false);
            }
        });
    });
}

module.exports = {
    Exists
}