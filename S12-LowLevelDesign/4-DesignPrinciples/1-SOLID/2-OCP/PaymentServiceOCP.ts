interface PaymentMethod {
    processPayment (amount: number): void;
}

class CreditCardPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log("Processing credit card payment of amount:", amount);
    }
}

class DebitCardPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log("Processing debit card payment of amount:", amount);
    }
}

class BitcoinPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log("Processing bitcoin payment of amount:", amount);
    }
}

class UPIPayment implements PaymentMethod {
    processPayment(amount: number): void {
        console.log("Processing bitcoin payment of amount:", amount);
    }
}


class PaymentServiceOCP {
    paymentMethod: PaymentMethod;
    constructor(paymentMethod: PaymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    deductAmount(amount: number) {
        this.paymentMethod.processPayment(amount);
    }
}

// Main code
const creditCardPayment: PaymentMethod = new CreditCardPayment();
const bitcoinPayment: PaymentMethod  = new BitcoinPayment();
const debitCardPayment: PaymentMethod  = new DebitCardPayment();
const paymentService = new PaymentServiceOCP(creditCardPayment);
paymentService.deductAmount(1000);

// Follows OCP