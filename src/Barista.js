import chalk from 'chalk';

export default class Barista {
	#isBusy = false;

	constructor() {
		this.id = crypto.randomUUID();
	}

	makeDrink(menu, cashier) {
		if (this.#isBusy) {
			console.log(
				chalk.red(
					`[바리스타] 현재 바쁨. '${menu}' 주문은 잠시 후에 처리됩니다.`
				)
			);
			setTimeout(() => this.makeDrink(menu, cashier), 1000);
		}

		this.#isBusy = true;
		console.log(chalk.magenta(`[바리스타] '${menu}' 음료를 준비합니다.`));
		setTimeout(() => {
			this.#isBusy = false;
			console.log(
				chalk.cyan(`[바리스타] '${menu}' 준비 완료. 캐시어에게 전달합니다.`)
			);
			cashier.deliver(menu);
		}, 1000);
	}

	isAvailable() {
		return !this.#isBusy;
	}

	equals(other) {
		return other instanceof Barista && this.id === other.id;
	}
}
