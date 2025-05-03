import type { OrderStatus } from "../types";
import type { Messaging } from "./messaging";
import type { ShoppingCart } from "../shopping-principle";
import type { CostumerOrder } from "../isp/costumer/costumer-protocol";

export class Order {
  private _orderStatus: OrderStatus = "open"
  constructor(private readonly cart: ShoppingCart, private readonly messaging: Messaging, private readonly costumer: CostumerOrder) {}

  get orderStatus() :OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if(this.cart.isEmpty()) {
      console.log("carrinho vazio");
    }

    this._orderStatus = "closed";
    this.messaging.sendMessage("pedido foi enviado com sucesso");
    this.cart.clear();
    console.log("O cliente é: " + this.costumer.getName());
    
  }
}
