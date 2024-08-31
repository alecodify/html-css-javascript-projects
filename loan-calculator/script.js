function calculateLoan() {
    loanAmount = document.getElementById('loan-amount').value;
    interestRate = document.getElementById('interest-rate').value;
    MonthsToPay = document.getElementById('pay').value;

    interest = (loanAmount * (interestRate * 0.01)) / MonthsToPay;

    monthlyPayment = (loanAmount / MonthsToPay + interest).toFixed(2);

    document.getElementById('payment').innerHTML = `Monthly Payment: ${monthlyPayment}`;

}