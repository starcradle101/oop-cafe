import Customer from './src/Customer.js';
import Cashier from './src/Cashier.js';
import Barista from './src/Barista.js';

const barista = new Barista();
const cashier = new Cashier(barista);
const customer = new Customer('레니');

cashier.setCustomer(customer);
customer.order('에스프레소', cashier);
