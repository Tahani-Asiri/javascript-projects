"use strict";

console.log("===== Developer Skills =====");

// 1. Temperature Amplitude
function calcTempAmplitude(temps) {
  let max = -Infinity;
  let min = Infinity;

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    // نتجاهل أي قيمة ليست رقمًا، مثل كلمة error
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }

  return max - min;
}

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

console.log("1. Temperature Amplitude:", calcTempAmplitude(temperatures));

///////////////////////////////////////////////////////
// 2. Combining Temperature Arrays
function calcCombinedAmplitude(firstTemps, secondTemps) {
  const combinedTemps = firstTemps.concat(secondTemps);
  return calcTempAmplitude(combinedTemps);
}

console.log(
  "2. Combined Temperature Amplitude:",
  calcCombinedAmplitude([3, 5, 1], [9, 0, 5])
);


// 3. Debugging with the Console
function measureKelvin(celsiusText) {
  console.log("Input type:", typeof celsiusText);

  const celsius = Number(celsiusText);
  const kelvin = celsius + 273.15;

  return kelvin;
}

console.log("3. Kelvin Temperature:", measureKelvin("10"));


// 4. Fixing Initial Values
const positiveTemps = [3, 5, 1, 9, 4, 5];

console.log(
  "4. Correct Temperature Amplitude:",
  calcTempAmplitude(positiveTemps)
);


// 5. Challenge 1: Temperature Forecast
function printForecast(arr) {
  let forecast = "... ";

  for (let i = 0; i < arr.length; i++) {
    forecast += `${arr[i]}°C in ${i + 1} days ... `;
  }

  console.log("5. Temperature Forecast:", forecast);
}

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);


// 6. Challenge 2: Work Week Analysis
function analyzeWorkWeek(dailyHours) {
  // نتأكد أن Array فيها ساعات سبعة أيام
  if (!Array.isArray(dailyHours) || dailyHours.length !== 7) {
    console.error("Please enter an array with exactly 7 daily hours.");
    return;
  }

  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  let totalHours = 0;
  let daysWorked = 0;
  let maxDayIndex = 0;

  for (let i = 0; i < dailyHours.length; i++) {
    totalHours += dailyHours[i];

    if (dailyHours[i] > 0) {
      daysWorked++;
    }

    if (dailyHours[i] > dailyHours[maxDayIndex]) {
      maxDayIndex = i;
    }
  }

  return {
    totalHours: totalHours,
    averageHours: totalHours / dailyHours.length,
    maxDay: daysOfWeek[maxDayIndex],
    daysWorked: daysWorked,
    isFullTime: totalHours >= 35
  };
}

const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const analysis = analyzeWorkWeek(weeklyHours);

console.log("6. Work Week Analysis:");
console.table(analysis);