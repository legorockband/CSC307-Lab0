// module.test.js
import mut from './module.js'; // MUT = Module Under Test

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div 1 -- success', () => {
  const got = mut.div(10, 5);
  const expected = 2;
  expect(got).toBe(expected);
});

test('Testing div 2 -- success', () => {
  const got = mut.div(43, 43);
  const expected = 1;
  expect(got).toBe(expected);
});

test('Testing div 3 -- success', () => {
  const got = mut.div(10, 20);
  const expected = 0.5;
  expect(got).toBe(expected);
});

test('Testing div 4 -- success', () => {
  const got = mut.div(0, 0);
  const expected = NaN;
  expect(got).toBe(expected);
});

test('Testing div 5 -- success', () => {
  const got = mut.div(27, 4);
  const expected = 6.75;
  expect(got).toBe(expected);
});

test('Testing div 6 -- success', () => {
  const got = mut.div(164255, 1935);
  const expected = 84.8863;
  expect(parseFloat(got.toFixed(4))).toBe(expected);
});

test('Testing div 7 -- success', () => {
  const got = mut.div(56.2965, 69.587215);
  const expected = 0.8090;
  expect(parseFloat(got.toFixed(4))).toBe(expected);
});

test('Testing cNums 1 -- success', () => {
  const text = "HelloWorld";
  const got = mut.containsNumbers(text);
  const expected = false;
  expect(got).toBe(expected);
});

test('Testing cNums 2 -- success', () => {
  const text = "1234";
  const got = mut.containsNumbers(text);
  const expected = true;
  expect(got).toBe(expected);
});

test('Testing cNums 3 -- success', () => {
  const text = "Hello World";
  const got = mut.containsNumbers(text);
  const expected = false;
  expect(got).toBe(expected);
});

test('Testing cNums 4 -- success', () => {
  const text = "woajsdjf3af98431jnf1faskldf1fio94naifnvm";
  const got = mut.containsNumbers(text);
  const expected = true;
  expect(got).toBe(expected);
});

test('Testing cNums 5 -- success', () => {
  const text = "    ";
  const got = mut.containsNumbers(text);
  const expected = false;
  expect(got).toBe(expected);
});

test('Testing cNums 6 -- success', () => {
  const text = "";
  const got = mut.containsNumbers(text);
  const expected = false;
  expect(got).toBe(expected);
});

