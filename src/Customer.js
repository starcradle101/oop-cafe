import chalk from 'chalk';

export default class Customer {
	#hasDrink = false;

	constructor(name) {
		this.id = crypto.randomUUID();
		this.name = name;
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

	equals(other) {
		return other instanceof Customer && this.id == other.id;
	}
}
