import Customer from './src/Customer.js';
import Barista from './src/Barista.js';
import Cashier from './src/Cashier.js';

const barista = new Barista('가배');
const cashier = new Cashier('후니훈', barista);
const customer = new Customer('레니');

console.log(barista.introduce());
console.log(cashier.introduce());
console.log(customer.introduce());

customer.order('에스프레소', cashier);
