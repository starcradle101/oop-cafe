import chalk from 'chalk';
import CafePerson from './CafePerson.js';

export default class Customer extends CafePerson {
	#hasDrink = false;

	constructor(name) {
		super(name);
	}

	getRole() {
		return '고객';
	}

	order(menu, cashier) {
		console.log(
			chalk.blue(`[고객] ${this.name}이(가) '${menu}'를 주문합니다.`)
		);
		cashier.takeOrder(menu, this);
	}

	receive(drink) {
		this.#hasDrink = true;
		console.log(
			chalk.green(`[고객] ${this.name}이(가) '${drink}'를 받았습니다.`)
		);
	}

	hasReceivedDrink() {
		return this.#hasDrink;
	}
}
