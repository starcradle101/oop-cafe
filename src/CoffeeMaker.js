// 커피 제조 시뮬레이션 및 진행률/완료 알림 담당

import OrderStatus from './OrderStatus.js';

class CoffeeMaker {
	constructor() {
		this._busy = false;
	}

	make(order, onProgress, onComplete) {
		if (this._busy) return;
		this._busy = true;
		order.setStatus(OrderStatus.PREPARING);
		const brewTime = order.getMenuItem().getBrewTime();
		const interval = 1000;
		let elapsed = 0;
		let percent = 0;

		const timer = setInterval(() => {
			elapsed += interval;
			percent = Math.min(100, Math.round((elapsed / brewTime) * 100));
			onProgress(percent);
			if (elapsed >= brewTime) {
				clearInterval(timer);
				order.setStatus(OrderStatus.COMPLETED);
				this._busy = false;
				onComplete(order);
			}
		}, interval);
	}

	isBusy() {
		return this._busy;
	}
}

export default CoffeeMaker;
