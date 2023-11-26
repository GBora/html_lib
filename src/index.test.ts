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

  it('should be able to take in multiple child elements' , () => {
    const inputs = ["one", "two", "three"];
    const children = inputs.map(el => div(el, {"class": "child"}));
    const result = div(children, {"class": "parent"});
    expect(result).to.equal('<div class="parent"> <div class="child">one</div> <div class="child">two</div> <div class="child">three</div></div>');
  });

  it('should if given an empty argument return an empty div' , () => {
    const result = div();
    expect(result).to.equal('<div></div>');
  });

});

