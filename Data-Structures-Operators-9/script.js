'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
// 1. Destructuring Arrays
const [firstCategory, secondCategory] = restaurant.categories;
console.log(firstCategory, secondCategory);

const [mainCategory, , vegetarianCategory] = restaurant.categories;
console.log(mainCategory, vegetarianCategory);

// 2. Destructuring Objects
const {
  name: restaurantName,
  location: restaurantLocation,
  categories,
} = restaurant;

console.log(restaurantName, restaurantLocation, categories);

const {
  fri: { open: fridayOpen, close: fridayClose },
} = restaurant.openingHours;

console.log(fridayOpen, fridayClose);

// 3. Spread Operator
const fullMenu = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];

console.log(fullMenu);

const updatedMenu = [...restaurant.mainMenu, 'Lasagna'];
console.log(updatedMenu);

const restaurantCopy = { ...restaurant, foundedIn: 1998 };
console.log(restaurantCopy);

// 4. Rest Pattern and Parameters
const [firstDish, ...remainingDishes] = restaurant.mainMenu;
console.log(firstDish, remainingDishes);

function addPrices(...prices) {
  let total = 0;

  for (const price of prices) {
    total += price;
  }

  return total;
}

console.log(addPrices(20, 30, 15));

// 5. Short Circuiting: || and &&
const ownerName = restaurant.owner || 'Unknown owner';
console.log(ownerName);

restaurant.name && console.log(restaurant.name);

// 6. Nullish Coalescing: ??
restaurant.numGuests = 0;

console.log(restaurant.numGuests || 10); // 10
console.log(restaurant.numGuests ?? 10); // 0

// 7. Logical Assignment Operators
const restaurantSettings = {
  numGuests: 0,
  owner: 'Giovanni',
};

restaurantSettings.manager ||= 'Not assigned';
restaurantSettings.numGuests ??= 10;
restaurantSettings.owner &&= 'Anonymous';

console.log(restaurantSettings);

// 8. for...of Loop
for (const dish of fullMenu) {
  console.log(dish);
}

for (const [index, dish] of fullMenu.entries()) {
  console.log(`${index + 1}: ${dish}`);
}

// 9. Enhanced Object Literals
const openingHours = restaurant.openingHours;

const restaurantInfo = {
  restaurantName,
  openingHours,
  showName() {
    console.log(this.restaurantName);
  },
};

restaurantInfo.showName();

// 10. Optional Chaining
console.log(restaurant.openingHours.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const openTime = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`${day}: ${openTime}`);
}

// 11. Object Keys, Values, and Entries
console.log(Object.keys(restaurant.openingHours));
console.log(Object.values(restaurant.openingHours));

for (const [day, hours] of Object.entries(restaurant.openingHours)) {
  console.log(`${day}: open ${hours.open}, close ${hours.close}`);
}

// 12. Sets
const ordersSet = new Set([
  'Pizza',
  'Pasta',
  'Pizza',
  'Risotto',
  'Pasta',
]);

console.log(ordersSet);
console.log(ordersSet.size);
console.log(ordersSet.has('Pizza'));

ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');

console.log(ordersSet);

const uniqueOrders = [...ordersSet];
console.log(uniqueOrders);

// 13. Set Operations
if (typeof italianFoods.union === 'function') {
  console.log('Union:', italianFoods.union(mexicanFoods));
  console.log('Intersection:', italianFoods.intersection(mexicanFoods));
  console.log('Difference:', italianFoods.difference(mexicanFoods));
}

// 14. Maps
const restaurantMap = new Map();

restaurantMap.set('name', restaurant.name);
restaurantMap.set('open', 12);
restaurantMap.set('close', 22);

console.log(restaurantMap.get('name'));
console.log(restaurantMap.has('open'));
console.log(restaurantMap.size);

for (const [key, value] of restaurantMap) {
  console.log(key, value);
}

const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

// 15. String Methods
const airline = 'TAP Air Portugal';

console.log(airline.length);
console.log(airline[0]);
console.log(airline.indexOf('Air'));
console.log(airline.slice(4, 7));
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const loginEmail = '  Hello@Example.com  ';
console.log(loginEmail.trim().toLowerCase());

console.log('Pizza'.padEnd(15, '.'));
console.log('23'.padStart(4, '0'));
console.log('✅'.repeat(3));

// 16. String Practice: Flights
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const status = type.replaceAll('_', ' ').trim();
  const fromCode = from.slice(0, 3).toUpperCase();
  const toCode = to.slice(0, 3).toUpperCase();
  const delayed = type.startsWith('_Delayed') ? '🔴 ' : '';

  const output =
    `${delayed}${status} from ${fromCode} to ${toCode} ` +
    `(${time.replace(':', 'h')})`;

  console.log(output);
}