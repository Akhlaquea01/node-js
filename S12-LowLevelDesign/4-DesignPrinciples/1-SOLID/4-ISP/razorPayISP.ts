interface CreditCardPaymentProcessor {
    processCreditCard(amount: number): void;
}

interface DebitCardPaymentProcessor {
    processDebitCard(amount: number): void;
}

interface PayPalPaymentProcessor {
    processPayPal(amount: number): void;
}

interface BankTransferPaymentProcessor {
    processBankTransfer(amount: number): void;
}


class BillDeskGateway implements BankTransferPaymentProcessor, DebitCardPaymentProcessor, CreditCardPaymentProcessor {
    processBankTransfer(amount: number): void {
        console.log(`Processing bank transfer payment of $${amount}`);
    }
    processCreditCard(amount: number): void {
        
        console.log(`Processing credit card payment of $${amount}`);        
    }
    processDebitCard(amount: number): void {
        console.log(`Processing debit card payment of $${amount}`);
    }

}


class RazorPay implements DebitCardPaymentProcessor, CreditCardPaymentProcessor {
    processCreditCard(amount: number): void {
        
        console.log(`Processing credit card payment of $${amount}`);        
    }
    processDebitCard(amount: number): void {
        console.log(`Processing debit card payment of $${amount}`);
    }
}


