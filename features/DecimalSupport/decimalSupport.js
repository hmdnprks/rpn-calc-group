import RPN from '../../src/rpn';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Configures Enzyme Adapter
configure({ adapter: new Adapter() });
let calc;
let result;

Given('I have a calc with decimal {float} {float}', function (a, b) {
    calc = `${a} ${b}`;
});

When('I ask it decimal to say add', function () {
    calc = `${calc} +`;
});

Then('it decimal should answer with add {float}', function (a) {
    result = RPN(calc);
    assert(result === a);
});

When('I ask it decimal to say subtract', function () {
    calc = `${calc} -`;
});

Then('it decimal should answer with sub {float}', function (a) {
    result = RPN(calc);
    assert(result === a);
});


When('I ask it decimal to say multiply', function () {
    calc = `${calc} *`;
});

Then('it decimal should answer with mul {float}', function (a) {
    result = RPN(calc);
    assert(result === a);
});

When('I ask i decimal to say divide', function () {
    calc = `${calc} /`;
});

Then('it decimal should answer with div {float}', function (a) {
    result = RPN(calc);
    assert(result === a);
});