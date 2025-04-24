import chalk from 'chalk';
import CafePerson from './CafePerson.js';

export default class Barista extends CafePerson {
	#isBusy = false;

	constructor(name) {
		super(name);
	}

	getRole() {
		return '바리스타';
	}

	makeDrink(menu, cashier) {
		if (this.#isBusy) {
			console.log(
				chalk.red(
					`[${this.getRole()}] 현재 바쁨. '${menu}' 주문은 잠시 후에 처리됩니다.`
				)
			);
			setTimeout(() => this.makeDrink(menu, cashier), 1000);
		}

		this.#isBusy = true;
		console.log(
			chalk.magenta(`[${this.getRole()}] '${menu}' 음료를 준비합니다.`)
		);
		setTimeout(() => {
			this.#isBusy = false;
			console.log(
				chalk.cyan(
					`[${this.getRole()}] '${menu}' 준비 완료. 캐시어에게 전달합니다.`
				)
			);
			cashier.deliver(menu);
		}, 1000);
	}

	isAvailable() {
		return !this.#isBusy;
	}
}
