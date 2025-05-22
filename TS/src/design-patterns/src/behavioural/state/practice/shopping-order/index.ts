import { ShoppingOrderState } from "./state";

export class ShoppingOrder {
    private state: ShoppingOrderState = new OrderPending(this);

    getState(): ShoppingOrderState {
        return this.state
    }

    setState(state: ShoppingOrderState): void {
        this.state = state;
    }

    getStateName(): string {
        return this.state.getName();
    }

    approvePayment(): void {
        this.state.approvePayment();
    }

    waitPayment(): void {
        this.state.waitPayment();
    }
}