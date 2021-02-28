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
  deposit(amount, type = "deposit") {
    this.transactions.push(this.createTransaction(amount, "deposit"));
    if (type === "deposit") {
      this.balance += amount;
    }
    return `Успішна транзакція баланс аккаунта - ${this.balance}`;
  },
  withdraw(amount, type = "withdraw") {
    this.transactions.push(this.createTransaction(amount, "withdraw"));
    if (type === "withdraw" && amount < this.balance) {
      this.balance = this.balance - amount;
      return `Успішна транзакція залишок на аккаунті - ${this.balance}`;
    }
    return "Недостатньо коштів";
  },
  getBalance() {
    return this.balance;
  },
  getTransactionDetails(id) {
    return this.transactions[id];
  },
  getTransactionTotal(type1) {
    let result = 0;
    for (const i of this.transactions) {
      const { amountTransactions, typeTransactions } = i;
      if (type1 === typeTransactions) {
        result += amountTransactions;
      }
    }
    return `Кількість коштів при ${type1} - ${result}`;
  },
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