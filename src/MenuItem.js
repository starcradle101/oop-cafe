// 단일 음료(메뉴 항목) 정보를 캡슐화하는 객체

class MenuItem {
	constructor(name, brewTime) {
		this._name = name;
		this._brewTime = brewTime;
	}

	getName() {
		return this._name;
	}

	getBrewTime() {
		return this._brewTime;
	}
}

export default MenuItem;
