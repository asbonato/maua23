export interface PayD {
    getCreditCardNo(): string;
    getCustomerName(): string;
    getCardExpDate(): string;
    getCardCVVNo(): number;
    getAmount(): number;

    setCreditCardNo(creditCardNo: string): void;
    setCustomerName(customerName: string): void;
    setCardExpDate(cardExpDate: string): void;
    setCardCVVNo(cardCVVNo: number): void;
    setAmount(amount: number): void; 
}

