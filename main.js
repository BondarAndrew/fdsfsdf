const users = [
  {
    id: 1,
    name: 'John',
    eyeColor: 'blue',
    gender: 'male',
    isActive: true,
    email: 'john@example.com',
    age: 30
  },
  {
    id: 2,
    name: 'Alice',
    eyeColor: 'brown',
    gender: 'female',
    isActive: false,
    email: 'alice@example.com',
    age: 25
  },

];


const userNames = users.map(user => user.name);


const usersWithBlueEyes = users.filter(user => user.eyeColor === 'blue');

const maleUserNames = users
  .filter(user => user.gender === 'male')
  .map(user => user.name);


const inactiveUsers = users.filter(user => !user.isActive);


const userEmailToFind = 'alice@example.com';
const foundUser = users.find(user => user.email === userEmailToFind);

const minAge = 25;
const maxAge = 35;
const usersInAgeRange = users.filter(user => user.age >= minAge && user.age <= maxAge);

console.log(userNames);
console.log(usersWithBlueEyes);
console.log(maleUserNames);
console.log(inactiveUsers);
console.log(foundUser);
console.log(usersInAgeRange);