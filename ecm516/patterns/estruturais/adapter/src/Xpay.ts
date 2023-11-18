export interface Xpay {
    getCreditCardNo(): string;
    getCustomerName(): string;
    getCardExpMonth(): string;
    getCardExpYear(): string;
    getCardCVVNo(): number;
    getAmount(): number;

    setCreditCardNo(creditCardNo: string): void;
    setCustomerName(customerName: string): void;
    setCardExpMonth(cardExpMonth: string): void;
    setCardExpYear(cardExpYear: string): void;
    setCardCVVNo(cardCVVNo: number): void;
    setAmount(amount: number): void; 
}