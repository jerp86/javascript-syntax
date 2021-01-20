const EntityBase = require('./entityBase');

console.log(new EntityBase({
  name: 'José Eduardo',
  gender: 'male',
  age: 34,
}).name);

console.log(new EntityBase({
  name: 'Xuxa da Silva',
  gender: 'female',
  age: 100,
}).#name);