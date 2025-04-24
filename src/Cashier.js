import chalk from 'chalk';

export default class Cashier {
	constructor(barista) {
		this.barista = barista;
		this.customer = null;
	}

	setCustomer(customer) {
		this.customer = customer;
	}

	takeOrder(menu) {
		console.log(
			chalk.yellow(`[캐시어] 주문 받은 '${menu}'를 바리스타에게 전달합니다.`)
		);
		this.barista.makeDrink(menu, this);
	}

	deliver(drink) {
		console.log(
			chalk.yellow(`[캐시어] 준비된 '${drink}'를 고객에게 전달합니다.`)
		);
		this.customer.receive(drink);
	}
}
