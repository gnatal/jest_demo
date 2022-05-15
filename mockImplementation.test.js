const myMockFn = jest.fn((cb) => cb(null,true)); // here I completely mock the function

myMockFn((err,val) => { console.log(val) });

jest.mock('./foo');
const foo = require('./foo')

foo.mockImplementation(() => 42); // Here I override the foo function imported from foo

foo() // returns 42

const myMockFn2 = jest
  .fn(()  => 'default')
  .mockImplementationOnce(cb => cb(null, true))
  .mockImplementationOnce(cb => cb(null, false));

myMockFn2((err, val) => console.log(val));
// > true

myMockFn2((err, val) => console.log(val));
// > false

myMockFn2()
// > default