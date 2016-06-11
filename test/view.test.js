import { assert } from 'chai';
import BackboneView from '../src/backbone-view.js';
import { getJquerySpies } from '../src/jquery-getter';


describe('Simple view render test', () => {
  it('should render when initialised', () => {
    const showFn = getJquerySpies().show;
    new BackboneView();
    
    assert.isTrue(showFn.called);
    showFn.reset();
  });
});