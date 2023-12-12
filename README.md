# ![Icon](./img//icon.png "Html Alchemy") HTML Alchemy

HTML Alchemy is a small Javascript (both node and browsers) library intended to help with building HTML strings.


## Installation

### Node

Install with the npm package manager.

```bash
npm install --save htma
```

## Usage

### Typescript

```typescript
import { div } from 'htma';

const template_string = div('foo',{"class": "bar"});

// template_string is <div class="bar">foo</div> 

```

### Node

TODO

### Browser

TODO

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://opensource.org/license/isc-license-txt/)