/*[5:32 PM]
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};
/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
  id: 0,
  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    transaction = {};
  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.id += 1;
    this.amount = amount;
    this.type = Transaction.DEPOSIT;
    this.balance += amount;
    this.transactions.push([this.id, this.type, this.amount]);
    // this.transactions.push(this);
  },
  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    this.id += 1;
    this.amount = amount;
    this.type = Transaction.WITHDRAW;
    if (amount < this.balance) {
      this.balance -= amount;
      this.transactions.push([this.id, this.type, this.amount]);
      //   this.transactions.push(this);
    } else {
      console.log("Not enough money");
    }
  },
  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    // console.log(this.transactions);
    return this.balance;
  },
  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction[0] == id) {
        return transaction;
      }
    }
  },
  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let sum = 0;
    for (let transaction of this.transactions) {
      if (transaction[1] == type) {
        sum += transaction[2];
      }
    }
    return sum;
  },
};

account.deposit(100);
console.log(`Transaction deposit 1: 100`);
account.deposit(10);
console.log("Transaction deposit 2: 10 ");
account.withdraw(20);
console.log("Transaction withdraw 3: 20 ");
account.withdraw(5);
console.log("Transaction withdraw 4: 5 ");
account.withdraw(500);
console.log(`Transaction withdraw 5: 500 `);

console.log(`Total balance ${account.getBalance()}`);
console.log(`getTransactionDetails = 2 `);
console.log(account.getTransactionDetails(2));
console.log(`total of withdraw`);
console.log(account.getTransactionTotal("withdraw"));
console.log(`total of deposit`);
console.log(account.getTransactionTotal("deposit"));
