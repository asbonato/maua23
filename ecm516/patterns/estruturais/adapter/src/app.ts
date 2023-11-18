import { PayD } from "./PayD";
import { Xpay } from "./Xpay";
import { XpayImpl } from "./XpayImpl";
import { XPayToPayDAdapter } from "./XpayToPayDAdapter";

let xpay: Xpay = new XpayImpl();
xpay.setCreditCardNo('4567778898123409');
xpay.setCustomerName('Max Webber');
xpay.setCardExpMonth('10');
xpay.setCardExpYear('2029');
xpay.setCardCVVNo(244);
xpay.setAmount(138.76);

let payD: PayD = new XPayToPayDAdapter(xpay);
//mandar para o gateway de pagamentos
console.log(payD.getCreditCardNo());
console.log(payD.getCustomerName());
console.log(payD.getCardExpDate());
console.log(payD.getCardCVVNo());
console.log(payD.getAmount());