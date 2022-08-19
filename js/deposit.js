document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositamountstring = depositField.value;
    const newDepositamount = parseFloat(newDepositamountstring);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotalstring = depositTotal.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalstring);

    const currentDepositTotal = previousDepositTotal + newDepositamount
    depositTotal.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalstring = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

    const currentBalanceTotal = previousBalanceTotal + newDepositamount;
    balanceTotalElement.innerText = currentBalanceTotal;

    depositField.value = '';
})