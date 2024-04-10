const chalk = require('chalk');
const colors = ['red', 'yellow', 'blue', 'magenta', 'cyan', 'green', 'magentaBright'];
module.exports = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.yellow('[ ❕ ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.red('[ ❕ ] » ') + data);
			break;
		default:
			console.log(chalk.bold[colors[Math.floor(Math.random() * colors.length)]](`${option} » `) + chalk[colors[Math.floor(Math.random() * colors.length)]](data));
			break;
	}
}

module.exports.loader = (data, option) => {
	switch (option) {
		case "warn":
			console.log(chalk.bold.yellow('[ 𝐀𝐧𝐝𝐫𝐞𝐞 𝟑.𝟎 ] » ') + data);
			break;
		case "error":
			console.log(chalk.bold.red('[ ERROR SYSTEM ] » ') + data);
			break;
		default:
			console.log(chalk.bold[colors[Math.floor(Math.random() * colors.length)]](`[ 𝐀𝐧𝐝𝐫𝐞𝐞 𝟑.𝟎 ] » `) + chalk[colors[Math.floor(Math.random() * colors.length)]](data));
			break;
	}
}
