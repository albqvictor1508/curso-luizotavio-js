import type { CartItem } from "../types";

export class ShoppingCart {
  private _items: CartItem[] = [];
  //não preciso de order, ja que tudo que é relacionado a order é resolvido na classe Order
  get items(): Readonly<CartItem[]> {
    return this._items;
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

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  //
  saveOrder(): void {
    console.log("pedido salvo");
  }

  clear(): void {
    this._items.length = 0;
    console.log("Carrinho limpo com sucesso!");
  }
}


