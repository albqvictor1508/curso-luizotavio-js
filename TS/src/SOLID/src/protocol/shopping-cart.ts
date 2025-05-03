import type { CartItem } from "../types";

export interface ShoppingCartProtocol {
    items: Readonly<CartItem[]>
    addItem(item: CartItem): void
    removeItem(index: number): void
    total(): number;
    isEmpty(): boolean;
    clear(): void;
}