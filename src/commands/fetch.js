const {
    db
} = require('../localdb');

function ExecuteGet(name) {
    return new Promise((resolve, reject) => {
        db.find({name: name}, (err, docs) => {
            if(err) reject(err);

            if(docs.length > 1) {
                resolve(docs.pop());
            }
        });
    });
}

module.exports = {
    ExecuteGet
}