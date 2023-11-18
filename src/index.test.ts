import { div } from './index';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('div function', () => {

  it('should be able to wrap contents in div tag' , () => {
    expect(div('foo')).to.equal('<div>foo</div>');
  });

  it('should be able to wrap contents in div tag and apply an class attribute' , () => {
    expect(div('foo',{name: "class", value:"bar"})).to.equal('<div class="bar">foo</div>');
  });

  it('should be able to wrap contents in div tag and apply an class attribute and an id' , () => {
    expect(div('foo',[{name: "class", value:"bar"}, {name: "id", value:"foobar"}])).to.equal('<div class="bar" id="foobar">foo</div>');
  });

});