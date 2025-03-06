import type { CartItem, OrderStatus } from "../types";

export class Legacy {
  private _items: CartItem[] = [];
  private _orderStatus: OrderStatus = "open";

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

get orderStatus(): OrderStatus {
  return this._orderStatus;
}

  addItem(item: CartItem): void {
    this._items.push(item);
  }

showCart(): CartItem[] {
  return this._items;
}

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return this._items.reduce((total, value) => total + value.price, 0)
  }

  checkout(): void {
    if(this.isEmpty()) {
      console.log("carrinho vazio");
    }

    this._orderStatus = "closed";
    this.sendMessage("pedido foi enviado com sucesso");
    this.saveOrder();
    this.clear();
  }

  sendMessage(msg: string): void {
    console.log(`Mensagem enviada: ${msg}`)
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  saveOrder(): void {
    console.log("pedido salvo");
  }

  clear(): void {
    this._items.length = 0;
    console.log("Carrinho limpo com sucesso!");
  }
}

const cart = new Legacy();
cart.addItem({name: "lavalux", price: 120});
cart.addItem({name: "teste", price: 20});
cart.addItem({name: "moto honda", price: 1000});
cart.removeItem(0);
console.log(cart.showCart());
console.log("total: ", cart.total());
cart.checkout()
