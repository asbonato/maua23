import { PayD } from "./PayD";
import { Xpay } from "./Xpay";

export class XPayToPayDAdapter implements PayD{
    private creditCardNo!: string;
    private customerName!: string;
    private cardExpDate!: string;
    private cardCVVNo!: number;
    private amount!: number;

    private readonly xpay: Xpay;

    constructor(xpay: Xpay) {
        this.xpay = xpay;
        this.setProp();
    }

    getCreditCardNo(): string {
        return this.creditCardNo;
    }
    getCustomerName(): string {
        return this.customerName;
    }
    getCardExpDate(): string {
        return this.cardExpDate;
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
    setCardExpDate(cardExpDate: string): void {
        this.cardExpDate = cardExpDate;
    }
    setCardCVVNo(cardCVVNo: number): void {
        this.cardCVVNo = cardCVVNo;
    }
    setAmount(amount: number): void {
       this.amount = amount;
    }   

    setProp(): void {
        this.setCreditCardNo(this.xpay.getCreditCardNo());
        this.setCustomerName(this.xpay.getCustomerName());
        this.setCardExpDate(this.xpay.getCardExpMonth()+
            '/'+this.xpay.getCardExpYear());
        this.setCardCVVNo(this.xpay.getCardCVVNo());
        this.setAmount(this.xpay.getAmount());
    }

}