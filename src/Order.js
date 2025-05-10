// 단일 주문 정보를 캡슐화하는 객체

import OrderStatus from './OrderStatus.js';

class Order {
	constructor(menuItem) {
		this._menuItem = menuItem;
		this._status = OrderStatus.PENDING;
	}

	getMenuItem() {
		return this._menuItem;
	}

	getStatus() {
		return this._status;
	}

	setStatus(status) {
		this._status = status;
	}
}

export default Order;
