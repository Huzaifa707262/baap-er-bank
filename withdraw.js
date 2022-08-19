document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountstring = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountstring);
    withdrawField.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number')
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalstring = withdrawTotalElement.innerText;
    const previousWithdrawTota = parseFloat(previousWithdrawTotalstring);


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalstring = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalstring);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert('not enough money')
        return;
    }
    const currentWithdrawTotal = previousWithdrawTota + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

})