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
<<<<<<< HEAD
cart.addItem(new Product("teste 1", 120));
cart.addItem(new Product("teste 2", 240));
cart.addItem(new Product("teste 3", 1000));
=======
cart.addItem(new Product("test product", 1200));
cart.addItem(new Product("test product 2", 500));
cart.addItem(new Product("test product 3", 200));
>>>>>>> 1862a57b2a5a9a054a4a7235dfd9185788bbd39e
cart.removeItem(0);
console.log(cart.showCart());
console.log("total: ", cart.total());
persistency.saveOrder();
order.checkout()
