const {
    db
} = require('../localdb');

function Exists(name) {
    return new Promise((reject, resolve) => {
        if(!db) reject();
        
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