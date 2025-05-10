// 사용자 입력값의 유효성 검사 및 파싱 담당

class InputParser {
	parse(input) {
		const trimmed = input.trim();
		if (!trimmed) {
			return { valid: false, error: '빈 입력입니다.' };
		}
		return { valid: true, value: trimmed };
	}
}

export default InputParser;
