import LoanAccount from "./LoanAccount";
import BankAccount from "./BankAccount";
import OverdraftAccount from "./OverdraftAccount";


var loanAccount = new LoanAccount(1234, "Henrik", "Høltzer");
loanAccount.deposit(500);
console.log(loanAccount.getBalance());

var overdraftAccount = new OverdraftAccount(1234, "Peter", "Sommer", 10000);
overdraftAccount.deposit(1000);
console.log(overdraftAccount.getBalance());

overdraftAccount.withdraw(20000);
console.log(overdraftAccount.getBalance());
