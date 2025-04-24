import Customer from './src/Customer.js';
import Barista from './src/Barista.js';
import Cashier from './src/Cashier.js';

const barista = new Barista();
const cashier = new Cashier(barista);
const customer = new Customer('레니');

customer.order('카페라떼', cashier);
