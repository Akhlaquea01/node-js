interface Gateway {
  processPayment(amount: number): void;
} 


// BillDesk Payment Gateway


class BillDeskGateway implements Gateway{
    processPayment(amount: number): void {
      console.log(`Deducting Rs. ${amount}`);
    }
}

class RazorPayPaymentAdapter implements Gateway {
  private pg: RazorPayGateway;

  constructor(pg: RazorPayGateway) {
    this.pg = pg;
  }

  processPayment(processAmount: number): void {
    this.pg.deductAmount(processAmount * 100);
  }
}


class RazorPayGateway {
    deductAmount(amountInPaisa: number): void {
      console.log(`Deducting Rs. ${amountInPaisa / 100}`);
    }
}



export class PaymentProcessor {
  #paymentGateway;
  constructor(paymentGateway) {
    this.#paymentGateway = paymentGateway;
  }
  processPayment(amount: number): void {
    this.#paymentGateway.processPayment(amount);
  }
}