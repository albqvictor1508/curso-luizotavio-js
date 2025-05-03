import { Messaging } from "./srp/messaging";
import { Order } from "./srp/order";
import { ShoppingCart } from "./shopping-principle";
import { Persistency } from "./srp/persistency";
import { NoDiscount } from "./ocp/discount";
import { Product } from "./srp/product";

const discount = new NoDiscount();
const cart = new ShoppingCart(discount);
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(cart, messaging);
cart.addItem(new Product("teste 1", 120));
cart.addItem(new Product("teste 2", 240));
cart.addItem(new Product("teste 3", 1000));
cart.removeItem(0);
console.log(cart.showCart());
console.log("total: ", cart.total());
persistency.saveOrder();
order.checkout()
