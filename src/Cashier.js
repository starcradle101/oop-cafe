import chalk from 'chalk';
import CafePerson from './CafePerson.js';

export default class Cashier extends CafePerson {
	#currentCustomer = null;

	constructor(name, barista) {
		super(name);
		this.barista = barista;
	}

	getRole() {
		return '캐시어';
	}

	takeOrder(menu, customer) {
		this.#currentCustomer = customer;
		console.log(
			chalk.yellow(
				`[캐시어] '${customer.name}'로부터 주문 받은 '${menu}'를 바리스타에게 전달합니다.`
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
}
