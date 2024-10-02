// Write a JavaScript program that creates a class called Bank with properties for bank names and branches. Include methods to add a branch, remove a branch, and display all branches. Create an instance of the Bank class and perform operations to add and remove branches.


class Bank {

    branches = [];
    bankName = null;
    
    constructor(bankName) {
        this.bankName = bankName;
    }


    addBranch(branchName) {
        this.branches.push(branchName);
        console.log(`Branch '${branchName}' added to ${this.bankName}`);
    }


    removeBranch(branchName) {
        const index = this.branches.indexOf(branchName);
        if (index !== -1) {
            this.branches.splice(index, 1);
            console.log(`Branch '${branchName}' removed from ${this.bankName}`);
        } else {
            console.log(`Branch '${branchName}' not found in ${this.bankName}`);
        }
    }


    displayBranches() {
        console.log(`Branches of ${this.bankName}:`);
        this.branches.forEach(branch => {
            console.log(`- ${branch}`);
        });
    }
}


const myBank = new Bank("National Bank");


myBank.addBranch("Downtown");
myBank.addBranch("Uptown");
myBank.addBranch("Suburban");


myBank.displayBranches();


myBank.removeBranch("Uptown");


myBank.displayBranches();
