"use strict";

// =================================
//1-التحدي الاول والثاني-bmi بارت1
// =================================
function compareBMI(massTahani, heightTahani, massSara, heightSara) {
  const bmiTahani = massTahani / heightTahani ** 2;
  const bmiSara = massSara / heightSara ** 2;
  const tahaniHigherBMI = bmiTahani > bmiSara;

  console.log("Tahani has higher BMI:", tahaniHigherBMI);

  if (bmiTahani > bmiSara) {
    console.log(`Tahani's BMI (${bmiTahani}) is higher than Sara's (${bmiSara})`);
  } else if (bmiSara > bmiTahani) {
    console.log(`Sara's BMI (${bmiSara}) is higher than Tahani's (${bmiTahani})`);
  } else {
    console.log("Equal BMI");
  }
}

compareBMI(78, 1.69, 92, 1.95);
compareBMI(95, 1.88, 85, 1.76);


// =================================
//2- التحدي الثالث-Teams Average
// =================================

const calcAverage = (a, b, c) => (a + b + c) / 3;

function compareTeams(tahaniTeam, saraTeam) {
  // المقارنة الأساسية
  if (tahaniTeam > saraTeam) {
    console.log("Tahani Team wins");
  } else if (saraTeam > tahaniTeam) {
    console.log("Sara Team wins");
  } else {
    console.log("Draw");
  }

  // Bonus: المتوسط يجب أن يكون 100 أو أكثر
  if (tahaniTeam > saraTeam && tahaniTeam >= 100) {
    console.log("Bonus: Tahani Team wins");
  } else if (saraTeam > tahaniTeam && saraTeam >= 100) {
    console.log("Bonus: Sara Team wins");
  } else if (tahaniTeam === saraTeam && tahaniTeam >= 100) {
    console.log("Bonus: Draw");
  } else {
    console.log("Bonus: No winner");
  }
}

compareTeams(calcAverage(96, 108, 89), calcAverage(88, 91, 110));
compareTeams(calcAverage(97, 112, 101), calcAverage(109, 95, 123));
compareTeams(calcAverage(97, 112, 101), calcAverage(109, 95, 106));


// =================================
// 3-االتحدي الرابع-Tips Calculator
// =================================

const calcTip = bill =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const testBills = [275, 40, 430];

for (let i = 0; i < testBills.length; i++) {
  const bill = testBills[i];
  const tip = calcTip(bill);

  console.log(`Bill: ${bill}, Tip: ${tip}, Total: ${bill + tip}`);
}


// =================================
//4- التحدي الاول- check Winner بارت 2
// =================================

// الفوز يتطلب متوسطًا يساوي ضعف المنافس أو أكثر
function checkWinner(tahaniTeam, saraTeam) {
  if (tahaniTeam >= 2 * saraTeam) {
    console.log(`Tahani Team wins (${tahaniTeam} vs. ${saraTeam})`);
  } else if (saraTeam >= 2 * tahaniTeam) {
    console.log(`Sara Team wins (${saraTeam} vs. ${tahaniTeam})`);
  } else {
    console.log("No team wins");
  }
}

checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));


// =================================
//5- التحدي الثاني-Arrays
// =================================

// نستخدم calcTip السابقة دون تكرارها
console.log("Tip for 100:", calcTip(100));

const bills = [125, 555, 44];

const tips = [
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[2])
];

const totals = [
  bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);


// =================================
//6-التحدي الثالث BMI and Object
// =================================

const tahani = {
  fullName: "Tahani Asiri",
  mass: 78,
  height: 1.69,

  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const sara = {
  fullName: "Sara",
  mass: 92,
  height: 1.95,

  calcBMI() {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

// تشغيل Method وحفظ النتيجة داخل كل Object
tahani.calcBMI();
sara.calcBMI();

if (tahani.bmi > sara.bmi) {
  console.log(
    `${tahani.fullName}'s BMI (${tahani.bmi}) is higher than ${sara.fullName}'s (${sara.bmi})`
  );
} else if (sara.bmi > tahani.bmi) {
  console.log(
    `${sara.fullName}'s BMI (${sara.bmi}) is higher than ${tahani.fullName}'s (${tahani.bmi})`
  );
} else {
  console.log("Equal BMI");
}


// =================================
//7-التحدي الرابع -Arrays and Loop
// =================================

const allBills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const allTips = [];
const allTotals = [];

for (let i = 0; i < allBills.length; i++) {
  const tip = calcTip(allBills[i]);

  allTips.push(tip);
  allTotals.push(allBills[i] + tip);
}

console.log("All bills:", allBills);
console.log("All tips:", allTips);
console.log("All totals:", allTotals);

// Bonus: حساب متوسط الأرقام داخل Array
function calcArrayAverage(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum / arr.length;
}

console.log("Average total:", calcArrayAverage(allTotals));
console.log("Average tip:", calcArrayAverage(allTips));