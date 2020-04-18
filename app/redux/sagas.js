export default function* rootSagas() {
  yield 'hello';
  // eslint-disable-next-line no-console
  console.log('hello');
  return 'dat';
}
