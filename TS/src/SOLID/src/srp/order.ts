import type { OrderStatus } from "../types";
import type { Messaging } from "./messaging";
import type { ShoppingCart } from "./shopping-principle";

export class Order {
  private _orderStatus: OrderStatus = "open"
  constructor(public cart: ShoppingCart, public messaging: Messaging) {}

  get orderStatus() :OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if(this.cart.isEmpty()) {
      console.log("carrinho vazio");
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage("pedido foi enviado com sucesso");
    // this.saveOrder();
    this.cart.clear();
  }
}
