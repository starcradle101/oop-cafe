// 전체 메뉴 목록 및 메뉴 항목 관리 객체

import MenuItem from './MenuItem.js';

class Menu {
	constructor() {
		this._items = [
			new MenuItem('에스프레소', 3000),
			new MenuItem('아메리카노', 5000),
			new MenuItem('카페라떼', 7000),
		];
	}

	getMenuList() {
		return this._items;
	}

	findByName(name) {
		return this._items.find((item) => item.getName() === name) || null;
	}

	isValidMenu(name) {
		return this._items.some((item) => item.getName() === name);
	}
}

export default Menu;
