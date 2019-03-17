(() => {
    const {
        AddSnippet
    } = require('./src/editor');
    const {
        ExecuteGet
    } = require('./src/commands/fetch');
    const {
        Exists
    } = require('./src/commands/exists');
    const {
        Setup
    } = require('./src/commands/setup');

    const argv = require('yargs')
        .usage('Usage $0 <cmd> [options]')
        .command('add <name> [lang] [type] [version]', 'add a new snippet')
        .command('fetch <name> [lang]', 'fetch a snippet')
        .command('setup', 'configure your settings')
        .help()
        .argv;

    //Only one command
    if (argv._.length === 1) {
        let cmd = argv._[0];
        switch (cmd) {
            case 'add':
                Exists(argv.name).then((isPresent) => {
                    if (!isPresent) {
                        AddSnippet(argv);
                    } else {
                        console.log('Already exists, try updating instead');
                    }
                }).catch(err => console.log(err));
                break;
            case 'fetch':
                ExecuteGet(argv);
                break;
            case 'setup':
                Setup();
                break;
            default:
                break;
        }
    } else {
        console.log('incorrect command, try executing --help');
    }
})();