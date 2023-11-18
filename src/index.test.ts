import { div } from './index';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;

describe('div function', () => {

  it('should be able to wrap contents in div tag' , () => {
    expect(div('foo', [])).to.equal('<div>foo</div>');
  });

});