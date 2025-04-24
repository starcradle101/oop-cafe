import chalk from 'chalk';

export default class Cashier {
	#currentCustomer = null;

	constructor(barista) {
		this.id = crypto.randomUUID();
		this.barista = barista;
	}

	takeOrder(menu, customer) {
		this.#currentCustomer = customer;
		console.log(
			chalk.yellow(
				`[캐시어] '${customer}로부터' 주문 받은 '${menu}'를 바리스타에게 전달합니다.`
			)
		);
		this.barista.makeDrink(menu, this);
	}

	deliver(drink) {
		if (this.#currentCustomer) {
			console.log(
				chalk.yellow(
					`[캐시어] 준비된 '${drink}'를 '${
						this.#currentCustomer.name
					}'고객에게 전달합니다.`
				)
			);
			this.#currentCustomer.receive(drink);
			this.#currentCustomer = null;
		}
	}

	equals(other) {
		return other instanceof Cashier && this.id === other.id;
	}
}
