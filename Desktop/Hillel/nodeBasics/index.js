

import chalk from 'chalk';


const log = console.log;


// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello Mykhailo!') + chalk.yellow.bold("Thank you for checking all our hometask and giving advice how to do it!" + chalk.greenBright.underline.bold("Hope we'll become so skillful AQA Engineers as you are;)") ));

