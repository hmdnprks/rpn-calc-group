import RPN from '../../src/rpn';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
const assert = require('assert');
const { Given, When, Then } = require('cucumber');

// Configures Enzyme Adapter
configure({ adapter: new Adapter() });
let calc;
let result;

Given('I have a calc with percent {int}', function (a) {
    calc = `${a}`;
});

When('I ask it  to say percent', function () {
    calc = `${calc} %`;
});

Then('it should answer with percent {float}', function (a) {
    result = RPN(calc);
    assert(result === a);
});