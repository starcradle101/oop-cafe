// 주문 상태 상수 정의 (enum 역할)

const OrderStatus = Object.freeze({
	PENDING: 'PENDING',
	PREPARING: 'PREPARING',
	COMPLETED: 'COMPLETED',
});

export default OrderStatus;
