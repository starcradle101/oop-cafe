import chalk from 'chalk';

export default class Barista {
	makeDrink(menu, cashier) {
		console.log(chalk.magenta(`[바리스타] '${menu}' 음료를 준비합니다.`));
		setTimeout(() => {
			console.log(
				chalk.cyan(`[바리스타] '${menu}' 준비 완료. 캐시어에게 전달합니다.`)
			);
			cashier.deliver(menu);
		}, 1000);
	}
}
