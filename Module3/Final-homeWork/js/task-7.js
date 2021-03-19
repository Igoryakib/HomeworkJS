const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    const transactionsOperation = {
      amountTransactions: amount,
      typeTransactions: type,
    };

    return transactionsOperation;
  },
  z,
};

console.log(account.deposit(10000));
console.log(account.deposit(5000));
console.log(account.withdraw(2000));
console.log(account.getBalance());
console.log(account.deposit(5000));
console.log(account.withdraw(2000));
console.log(account.withdraw(2000));
console.log(account.getBalance());
console.log(account.getTransactionDetails(5));