import chalk from 'chalk';

export default class Customer {
	constructor(name) {
		this.name = name;
	}

	order(menu, cashier) {
		console.log(
			chalk.blue(`[고객] ${this.name}이(가) '${menu}'를 주문합니다.`)
		);
		cashier.takeOrder(menu);
	}

	receive(drink) {
		console.log(
			chalk.green(`[고객] ${this.name}이(가) 음료 '${drink}'를 받았습니다.`)
		);
	}
}
