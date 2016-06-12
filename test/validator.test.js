import { assert } from 'chai';
import proxyquire from 'proxyquire';
import { getJquerySpies, getJquery } from '../src/jquery-getter';

const $ = getJquery();
const getValidator = proxyquire('../src/validator', { jquery : $ }).default;
const isEmpty = proxyquire('../src/validator', { jquery : $ }).isEmpty;

const addClassFn = getJquerySpies().addClass;
const removeClassFn = getJquerySpies().removeClass;

describe('Simple view render test', () => {
  it('should render when initialised', () => {
  	let value = '';
  	const validator = getValidator(isEmpty, 'input', () => value);

  	validator.validate();
  	assert.isTrue(addClassFn.called);
  	assert.isTrue(addClassFn.getCall(0).calledWith('error'));
  	addClassFn.reset();

  	value = 'asd';
  	validator.validate();

  	assert.isFalse(addClassFn.called);
  	assert.isTrue(removeClassFn.called);
  	assert.isTrue(removeClassFn.getCall(0).calledWith('error'));
  	removeClassFn.reset();
  });
});