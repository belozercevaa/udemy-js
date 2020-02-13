"use strict";

let money = +prompt('Ваш бюджет на месяц?');
let date = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
  money: money,
  date: date,
  expenses : {},
  optionalExpenses: {},
  income : [],
  savings: false,
};

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

// let i = 0;
// while(i < 2) {
//   let ans1 = prompt(ques1);
//   let ans2 = +prompt(ques2);
//   if (typeof(ans1) === 'string' && typeof(ans1) !== null && typeof(ans2) !== null && 
//       typeof(ans1) !== '' && typeof(ans2) !== '' && ans1.length < 50) {
//     appData.expenses[ans1] = ans2;
//   }
//   i++;
// }

// do {
//   let ans1 = prompt(ques1);
//   let ans2 = +prompt(ques2);
//   if (typeof(ans1) === 'string' && typeof(ans1) !== null && typeof(ans2) !== null && 
//       typeof(ans1) !== '' && typeof(ans2) !== '' && ans1.length < 50) {
//     appData.expenses[ans1] = ans2;
//   }
//   ++i;
// } while(i < 2);

appData.moneyPerDay = appData.money / 30;

if (appData.moneyPerDay <= 100) {
  console.log('Минимальный уровень дохода');
}
else if (appData.moneyPerDay >100 && appData.moneyPerDay <= 2000) {
  console.log('Средний уровень дохода');
}
else if(appData.moneyPerDay > 2000) {
  console.log('Высокий уровень дохода');
}
else {
  console.log('Произошла ошибка');
}

alert(money);
console.log(appData);

