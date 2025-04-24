export default class CafePerson {
	constructor(name) {
		if (new.target === CafePerson) {
			throw new Error('CafePerson은 직접 인스턴스화 할 수 없습니다.');
		}
		this.name = name;
		this.id = crypto.randomUUID();
	}

	getRole() {
		throw new Error('getRole()은 서브클래스에서 구현되어야 합니다.');
	}

	introduce() {
		return `[${this.getRole()}] ${this.name}`;
	}

	equals(other) {
		return other instanceof CafePerson && this.id === other.id;
	}
}
