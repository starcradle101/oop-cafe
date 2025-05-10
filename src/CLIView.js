// CLI 입출력 담당 객체 (Node.js 표준 입출력 사용)

import readline from 'readline';

class CLIView {
	constructor() {
		this.readline = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
	}

	showWelcome(menuList) {
		console.log('===== OOP 카페에 오신 것을 환영합니다! =====');
		console.log('메뉴:');
		menuList.forEach((item) => {
			console.log(`- ${item.getName()} (${item.getBrewTime() / 1000}초)`);
		});
	}

	promptMenuName() {
		return new Promise((resolve) => {
			this.readline.question('주문할 커피 이름을 입력하세요: ', (answer) => {
				resolve(answer);
			});
		});
	}

	showProgressBar(percent) {
		const barLength = 6;
		const filled = Math.round((percent / 100) * barLength);
		const empty = barLength - filled;
		const bar = `[${'#'.repeat(filled)}${'-'.repeat(
			empty
		)}] ${percent}% 완료 ☕`;
		process.stdout.clearLine(0);
		process.stdout.cursorTo(0);
		process.stdout.write(bar);
		if (percent === 100) {
			process.stdout.write('\n');
		}
	}

	showComplete(message) {
		console.log(message);
	}

	showError(message) {
		console.log(`⚠️  ${message}`);
	}

	close() {
		this.readline.close();
	}
}

export default CLIView;
