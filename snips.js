(() => {
    const {
        AddSnippet
    } = require('./src/editor');

    const argv = require('yargs')
        .usage('Usage $0 <cmd> [options]')
        .command('add <name> [lang] [type] [version]', 'add a new snippet')
        .help()
        .argv;

    //Only one command
    if (argv._.length === 1) {
        let cmd = argv._[0];
        switch (cmd) {
            case 'add':
                AddSnippet(argv);
                break;
            default:
                break;
        }
    }
})();