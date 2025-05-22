export interface ShoppingOrderState {
    name: string;

    getName(): string;
    approvePayment(): void;
    rejectPayment(): void;
    waitPayment(): void;
    shipOrder(): void;
}