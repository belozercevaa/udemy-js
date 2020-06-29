"use strict";

let appData = {
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

function start() {
    let money = +prompt('Ваш бюджет на месяц?'),
        date = prompt('Введите дату в формате YYYY-MM-DD');
    while (isNaN(money) || money === '' || money === null) {
        money = +prompt('Ваш бюджет на месяц?');
    }
    appData.money = money;
    appData.date = date;
}

function chooseExpenses() {
    let ques1 = 'Введите обязательную статью расходов в этом месяце';
    let ques2 = 'Во сколько обойдется?';

    for (let i = 0; i < 2; i++) {
        let ans1 = prompt(ques1);
        let ans2 = +prompt(ques2);
        if (typeof(ans1) === 'string' && typeof(ans1) !== null && typeof(ans2) !== null &&
            typeof(ans1) !== '' && typeof(ans2) !== '' && ans1.length < 50) {
            appData.expenses[ans1] = ans2;
        }
    }
}

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        appData.optionalExpenses[i] = prompt('Статья необязательных расходов?');
    }
}

function detectDayBudget() {
    appData.moneyPerDay = (appData.money / 30);
    alert('Дневной бюджет: ' + appData.moneyPerDay);
    detectLevel();
}

function detectLevel() {
    if (appData.moneyPerDay <= 100) {
        console.log('Минимальный уровень дохода');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 2000) {
        console.log('Средний уровень дохода');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень дохода');
    } else {
        console.log('Произошла ошибка');
    }
}

function checkSavings() {
    let ques1 = 'Какова сумма накоплений?';
    let ques2 = 'Под какой процент?';
    if (appData.savings === true) {
        let sum = +prompt(ques1),
            percent = +prompt(ques2);

        appData.monthIncome = sum / 12 / 100 * percent;
        alert('Сумма дохода с накоплений в месяц: ' + appData.monthIncome);
    }
}


start();
chooseExpenses();
chooseOptExpenses();
detectDayBudget();
checkSavings();

console.log(appData);