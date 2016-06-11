import proxyquire from 'proxyquire';
import { getJquery }from './jquery-getter';

const $ = getJquery();
const View = proxyquire('backbone', { jquery: $ }).View;

export default class SimpleView extends View {
  constructor() {
	super({ el: '#someDiv' });
  }
  
  initialize() { this.render(); }
  
  render() { this.$el.show(); }
}