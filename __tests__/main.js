const querystringToObject = require('..');

test('converts query string into an object', () => {
  const qs = '?page=2&size=10&total=200';
  expect(querystringToObject(qs)).toStrictEqual({
    'page': '2',
    'size': '10',
    'total': '200',
  });
});
