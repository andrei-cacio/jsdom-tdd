let nodeJquery = null;
let jquerySpies = null;

/*eslint-disable */
export function getJquery(spy = false) {

  if (isBrowser()) {
    return require('jquery');
  }
  else {
    if (!nodeJquery) {
      const sinon = require('sinon');
      const fakeDOM = require('jsdom').jsdom();
      nodeJquery = require('jquery')(fakeDOM.defaultView);
    }

    return nodeJquery;
  }

}

export function getJquerySpies() {
  const sinon = require('sinon');
  
  if (!jquerySpies) {
    jquerySpies = {};
    
    Object.keys(nodeJquery.prototype).forEach(method => {
      if (typeof nodeJquery.prototype[method] === 'function') {
        jquerySpies[method] = sinon.spy(nodeJquery.prototype, method);
      }
    });
  }

  return jquerySpies;
}

function isBrowser() {
  return typeof window === 'object' && typeof document == 'object';
}


/*eslint-enable */