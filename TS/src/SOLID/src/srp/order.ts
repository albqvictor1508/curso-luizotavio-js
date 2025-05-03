import type { OrderStatus } from "../types";
import type { CostumerOrder } from "../isp/costumer/costumer-protocol";
import type { ShoppingCartProtocol } from "../protocol/shopping-cart";
import type { MessagingProtocol } from "../protocol/messaging";
import type { PersistencyProtocol } from "../protocol/persistency";

export class Order {
  private _orderStatus: OrderStatus = "open"
  constructor(
    private readonly cart: ShoppingCartProtocol, 
    private readonly messaging: MessagingProtocol, 
    private readonly costumer: CostumerOrder, 
    private readonly persistency: PersistencyProtocol
  ) {}

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
