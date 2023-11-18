const lib = require('../dist/index.js');

const spanTag = lib.span('foo');
const liTag = lib.li('foo');
const divTag = lib.div('foo',{"class": "bar", "id": "foobar"});

console.log(spanTag);
console.log(liTag);
console.log(divTag);