// 애플리케이션의 전체 흐름을 제어하는 중앙 컨트롤러

import CLIView from './CLIView.js';
import InputParser from './InputParser.js';
import Menu from './Menu.js';
import CoffeeMaker from './CoffeeMaker.js';
import Order from './Order.js';

class CoffeeVendingMachineApp {
	constructor() {
		this.cliView = new CLIView();
		this.inputParser = new InputParser();
		this.menu = new Menu();
		this.coffeeMaker = new CoffeeMaker();
		this.currentOrder = null;
		this._running = true;
	}

	async start() {
		while (this._running) {
			this.cliView.showWelcome(this.menu.getMenuList());
			const input = await this.cliView.promptMenuName();
			const parsed = this.inputParser.parse(input);
			if (!parsed.valid) {
				this.cliView.showError(parsed.error);
				continue;
			}
			const menuItem = this.menu.findByName(parsed.value);
			if (!menuItem) {
				this.cliView.showError('메뉴 이름을 정확하게 입력해주세요');
				continue;
			}
			this.currentOrder = new Order(menuItem);
			await this._processOrder(this.currentOrder);
			this._running = false;
		}
		this.cliView.close();
	}

	async _processOrder(order) {
		return new Promise((resolve) => {
			this.coffeeMaker.make(
				order,
				(percent) => this.cliView.showProgressBar(percent),
				(completedOrder) => {
					this.cliView.showComplete(
						`${completedOrder.getMenuItem().getName()}가 준비되었습니다!`
					);
					resolve();
				}
			);
		});
	}
}

export default CoffeeVendingMachineApp;
