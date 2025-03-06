import { Messaging } from "./messaging";
import { Order } from "./order";
import { ShoppingCart } from "./shopping-principle";

const cart = new ShoppingCart();
const messaging = new Messaging();
const order = new Order(cart, messaging);
cart.addItem({name: "lavalux", price: 120});
cart.addItem({name: "teste", price: 20});
cart.addItem({name: "moto honda", price: 1000});
cart.removeItem(0);
console.log(cart.showCart());
console.log("total: ", cart.total());
order.checkout()
