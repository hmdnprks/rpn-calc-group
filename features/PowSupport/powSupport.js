import RPN from '../../src/rpn';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Configures Enzyme Adapter
configure({ adapter: new Adapter() });
let calc;
let result;

Given('I have a calc with pow {int} {int}', function (a, b) {
    calc = `${a} ${b}`;
});

When('I ask it  to say pow', function () {
    calc = `${calc} pow`;
});

Then('it should answer with pow {int}', function (a) {
    result = RPN(calc);
    assert(result === a);
});