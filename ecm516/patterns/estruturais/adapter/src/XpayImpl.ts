import { Xpay } from "./Xpay";

export class XpayImpl implements Xpay {
    private creditCardNo!: string;
    private customerName!: string;
    private cardExpMonth!: string;
    private cardExpYear!: string;
    private cardCVVNo!: number;
    private amount!: number;


    getCreditCardNo(): string {
        return this.creditCardNo;
    }
    getCustomerName(): string {
        return this.customerName;
    }
    getCardExpMonth(): string {
        return this.cardExpMonth;
    }
    getCardExpYear(): string {
        return this.cardExpYear;
    }
    getCardCVVNo(): number {
        return this.cardCVVNo;
    }
    getAmount(): number {
        return this.amount;
    }
    setCreditCardNo(creditCardNo: string): void {
        this.creditCardNo = creditCardNo;
    }
    setCustomerName(customerName: string): void {
        this.customerName = customerName;
    }
    setCardExpMonth(cardExpMonth: string): void {
        this.cardExpMonth = cardExpMonth;
    }
    setCardExpYear(cardExpYear: string): void {
        this.cardExpYear = cardExpYear;
    }
    setCardCVVNo(cardCVVNo: number): void {
        this.cardCVVNo = cardCVVNo;
    }
    setAmount(amount: number): void {
       this.amount = amount;
    }   
}