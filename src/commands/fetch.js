const clipboardy = require('clipboardy');
const {
    db
} = require('../localdb');
const {
    Update
} = require('../fsdb');

function ExecuteGet(args) {
    if (!db) return;

    if (args.lang) {
        GetByLang(args.name, args.lang);
    } else {
        GetByName(args.name);
    }
}

function GetByName(name) {
    db.find({
        name: name
    }, (err, docs) => {
        if (err) console.log(err);
        clipboardy.writeSync(docs[0].snippet);
        IncrementUsage(docs[0].name, docs[0].usage || 1);
        console.log('Copied to clipboard');
    });
}

function GetByLang(name, lang) {
    db.find({
        name: name,
        lang: lang
    }, (err, docs) => {
        if (err) console.log(err);

        if (docs.length > 1) {
            clipboardy.writeSync(docs.pop().snippet);
        } else {
            clipboardy.writeSync(docs[0].snippet);
        }
        console.log('Copied to clipboard');
    });
}

async function IncrementUsage(name, usage) {
    let usageUtd = usage + 1;
    db.update({
        name: name
    }, {
        $set: {
            usage: usageUtd
        }
    }, {}, function (err, numReplaced) {
        if (err) {
            console.log(err);
        }
        if (numReplaced !== 1) {
            console.log('issues');
        }
    });

    Update({
        name
    }, {
        usage: usageUtd
    });
}

module.exports = {
    ExecuteGet
}