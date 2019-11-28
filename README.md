# querystring-to-object

> Convert a query string into an object

## Installation

```bash
$ npm i @alexcarpenter/querystring-to-object
```

## Usage

```js
import querystringToObject from '@alexcarpenter/querystring-to-object';

const qs = '?page=2&size=10&total=200';

querystringToObject(qs); //=> { page: '2', size: '10', total: '200' }
```

## Related

- [object-to-querystring](https://github.com/alexcarpenter/object-to-querystring)

## License

[MIT](LICENSE).
