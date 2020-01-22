const program = require('commander');
const { roleSeeder }= require('./roleSeeder');

program.command('seed:roles').action(() => roleSeeder() );

program.parse(process.argv);