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
cart.addItem(new Product("test product", 1200));
cart.addItem(new Product("test product 2", 500));
cart.addItem(new Product("test product 3", 200));
cart.removeItem(0);
console.log(cart.showCart());
console.log("total: ", cart.total());
persistency.saveOrder();
order.checkout()
