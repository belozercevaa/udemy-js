"use strict";

let money = prompt('Ваш бюджет на месяц?');
let date = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  money: money,
  date: date,
  expenses : {},
  optionalExpenses: 0,
  income : [],
  savings: false,
};

let ques1 = 'Введите обязательную статью расходов в этом месяце';
let ques2 = 'Во сколько обойдется?';

for (let i = 0; i < 2; i++) {
  let ans1 = prompt(ques1);
  let ans2 = prompt(ques2);
  console.log(ans1, typeof ans1, ans2);
  appData.expenses[ans1] = ans2;
}

alert(money);
console.log(appData);

