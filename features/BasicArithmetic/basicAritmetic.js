import RPN from '../../src/rpn';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Configures Enzyme Adapter
configure({ adapter: new Adapter() });
let calc;
let result;

Given('I have a calc with {int} {int}', function (a, b) {
  calc = `${a} ${b}`;
});

When('I ask it to say add', function () {
  calc = `${calc} +`;
});

Then('it should answer with add {int}', function (a) {
   result = RPN(calc);
  assert(result === a);
});

When('I ask it to say multiply', function () {
  calc = `${calc} *`;
});

When('I ask it to say divide', function () {
  calc = `${calc} /`;
});

Then('it should answer with div {int}', function (a) {
  result = RPN(calc);
  assert(result === a);
});

Then('it should answer with mul {int}', function (a) {
  result = RPN(calc);
  assert(result === a);
});

When('I ask it to say subtract', function () {
  calc = `${calc} -`;
});

Then('it should answer with sub {int}', function (a) {
  result = RPN(calc);
  assert(result === a);
});

Given('I have a calc with {string}', function (string) {
  calc = string;
});