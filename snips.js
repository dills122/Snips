(() => {
    const {
        AddSnippet
    } = require('./src/editor');
    const {
        ExecuteGet
    } = require('./src/commands/fetch');

    const argv = require('yargs')
        .usage('Usage $0 <cmd> [options]')
        .command('add <name> [lang] [type] [version]', 'add a new snippet')
        .command('fetch <name>', 'fetch a snippet')
        .help()
        .argv;

    //Only one command
    if (argv._.length === 1) {
        let cmd = argv._[0];
        switch (cmd) {
            case 'add':
                AddSnippet(argv);
                break;
            case 'fetch':
                ExecuteGet(argv.name);
            default:
                break;
        }
    }
})();