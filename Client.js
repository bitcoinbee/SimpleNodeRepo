

const names = require('./Person')
const sayHi =require('./Util')
const DynamicProp=require('./DynamicProperties')
const Calculation =require('./Numbers/CalculationUtil')
const { Console } = require('console')

sayHi('Susan');
sayHi(names.John);
sayHi(names.Peter);
sayHi(DynamicProp.Weekdays[0]);
sayHi(DynamicProp.SinglePerson.FirstName);
sayHi(DynamicProp.SinglePerson.LastName);

const AdditionResult =Calculation.add(5,5);
console.log(`The addition result is ${AdditionResult}`);