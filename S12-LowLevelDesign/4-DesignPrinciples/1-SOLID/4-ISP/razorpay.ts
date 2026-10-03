interface PaymentProcessor {
    processCreditCard(amount: number): void;
    processDebitCard(amount: number): void;
    processPayPal(amount: number): void;
    processBankTransfer(amount: number): void;  
}


class RazorPayProcessor implements PaymentProcessor {
    processCreditCard(amount: number): void {
        console.log(`Processing credit card payment of $${amount}`);
    }
    processDebitCard(amount: number): void {
        console.log(`Processing debit card payment of $${amount}`);
    }
    processPayPal(amount: number): void {
        throw new Error("Method not implemented.");
    }
    processBankTransfer(amount: number): void {
        throw new Error("Method not implemented.");
    }
}


