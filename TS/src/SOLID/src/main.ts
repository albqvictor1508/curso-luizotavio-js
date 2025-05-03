import { Messaging } from "./srp/messaging";
import { Order } from "./srp/order";
import { ShoppingCart } from "./shopping-principle";
import { Persistency } from "./srp/persistency";
import { NoDiscount } from "./ocp/discount";
import { Product } from "./srp/product";
import { EnterpriseCostumer, IndividualCostumer } from "./isp/costumer";

const discount = new NoDiscount();
const cart = new ShoppingCart(discount);
const persistency = new Persistency();
const messaging = new Messaging();
const individualCostumer = new IndividualCostumer(
    "victor", "arruda", "000000"
);
const enterpriseCostumer = new EnterpriseCostumer(
    "pitoco aws", "victor", "12345"
)
const order = new Order(cart, messaging, individualCostumer);
cart.addItem(new Product("teste 1", 120));
cart.addItem(new Product("teste 2", 240));
cart.addItem(new Product("teste 3", 1000));
cart.addItem(new Product("test product", 1200));
cart.addItem(new Product("test product 2", 500));
cart.addItem(new Product("test product 3", 200));
cart.removeItem(0);
console.log(cart.showCart());
console.log("total: ", cart.total());
persistency.saveOrder();
order.checkout()
