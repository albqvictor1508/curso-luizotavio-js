import { ShoppingOrder } from "./shopping-order";
import { ShoppingOrderState } from "./shopping-order/state";

export class OrderPending implements ShoppingOrderState {
    private name: string = "OrderPending";

    constructor(private order: ShoppingOrder) {}

    getName(): string {
        return this.name;
    }
    approvePayment(): void {
        throw new Error("Method not implemented.");
    }
    rejectPayment(): void {
        throw new Error("Method not implemented.");
    }
    waitPayment(): void {
        throw new Error("Method not implemented.");
    }
    shipOrder(): void {
        throw new Error("Method not implemented.");
    }

}