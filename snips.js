(() => {
    const program = require('commander');

    const {ExecuteAdd} = require('./src/create');

    if(process.argv.length <= 0) {
        console.log('specify a command to run');
    }

    program
        .version('0.0.1')
        .description('Snippet manager for your terminal');


    program
        .command('add <name>')
        .alias('a')
        .option('-l, --lang', 'Set language')
        .option('-v, --version', 'Set version of snippet')
        .option('-t, --type', 'Sets type of snippet')
        .action((name, cmd) => {
            if(name) {
                var isSuccess = ExecuteAdd(name, cmd);
            }
        });
})();