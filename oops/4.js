// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account. Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {

    accountNumber = null;
    balance = 0;

    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(){
        let depositAmount = prompt("Enter deposit amount : ");
        this.balance += +depositAmount;
        console.log(`Deposited ${depositAmount}. New balance: ${this.balance}`);
    }

    withdraw(){
        let withdrawAmount = prompt("Enter withdrawal amount : ");
        if(this.balance >= withdrawAmount){
            this.balance -= +withdrawAmount;
            console.log(`Withdrew ${withdrawAmount}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

}


let account1 = new BankAccount("12345", 1000);
account1.deposit();
account1.withdraw();
