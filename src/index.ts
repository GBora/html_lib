import { tagFunctionFactory } from './factories/tagFunctionFactory';

//Tags
export const span = tagFunctionFactory('span');
export const li = tagFunctionFactory('li');
export const div = tagFunctionFactory('div');
export const ol = tagFunctionFactory('ol');
export const ul = tagFunctionFactory('ul');
export const form = tagFunctionFactory('form');

//Self closing tags
export const img = tagFunctionFactory('img', true);