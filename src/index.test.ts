import { div } from './index';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('div function', () => {

  it('should be able to wrap contents in div tag' , () => {
    expect(div('foo')).to.equal('<div>foo</div>');
  });

  it('should be able to wrap contents in div tag and apply an class attribute' , () => {
    const result = div('foo',{"class": "bar"});
    expect(result).to.equal('<div class="bar">foo</div>');
  });

  it('should be able to wrap contents in div tag and apply an class attribute and an id' , () => {
    const result = div('foo', {"class": "bar", "id": "foobar"});
    expect(result).to.equal('<div class="bar" id="foobar">foo</div>');
  });

});