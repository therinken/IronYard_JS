var MattsBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

var RobertosBankAccount = {
    checking: 0,
    savings: 0,
    retirement: 0
};

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19);

function addToBank(account, savings, retirement, checking) {
    "use strict";
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

function getSumOfAccounts(account) {
    "use strict";
    // return ... ?? var difference = function (a, b) { return Math.abs(a - b) }

    if sumOfMatts > sumOfRobertos
    return sumOfMatts - sumOfRobertos
    else
        return sumOfRobertos - sumOfMatts
}

console.log();
