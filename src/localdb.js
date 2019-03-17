const Datastore = require('nedb');

const path = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Preferences' : process.env.HOME + "/.local/share");
const db = new Datastore({
    filename: `${path}/snippets.db`,
    autoload: true
});

module.exports = {
    db
}