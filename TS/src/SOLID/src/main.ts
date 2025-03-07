import { Messaging } from "./srp/messaging";
import { Order } from "./srp/order";
import { ShoppingCart } from "./shopping-principle";
import { Persistency } from "./srp/persistency";

const cart = new ShoppingCart();
const persistency = new Persistency();
const messaging = new Messaging();
const order = new Order(cart, messaging);
cart.addItem({name: "lavalux", price: 120});
cart.addItem({name: "teste", price: 20});
cart.addItem({name: "moto honda", price: 1000});
cart.removeItem(0);
console.log(cart.showCart());
console.log("total: ", cart.total());
persistency.saveOrder();
order.checkout()
