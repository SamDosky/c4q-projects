const chalk = require('chalk');
const figlet = require('figlet');

// console.log(chalk.blue('Hello world!'));
// console.log(chalk.blue.bgRed.bold('Hello world!'));

figlet.text('Hello World!', {
    font: 'Alligator',
    horizontalLayout: 'universal smushing',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(chalk.yellow.bgBlue.bold(data));
});

