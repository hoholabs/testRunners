const { capitalize, reverseString, calculator, caesarCipher, analyzeArray } = require('./topPracticeTests');

test('First word is capitalized', () => {
    expect(capitalize('hello operator')).toBe('Hello operator');
});

test('First word is capitalized', () => {
    expect(capitalize('HELLO OPERATOR')).toBe('HELLO OPERATOR');
});

test('reverses string',()=>{
    expect(reverseString('hello operator')).toBe('rotarepo olleh');
});

test('reverses string',()=>{
    expect(reverseString('rotarepo olleh')).toBe('hello operator');
});

test('calculator can add',()=>{
    expect(calculator.add(1,1)).toBe(2);
});

test('calculator can multiply',()=>{
    expect(calculator.mul(1,1)).toBe(1);
});

test('calculator can subtract',()=>{
    expect(calculator.sub(1,1)).toBe(0);
});

test('calculator can divide',()=>{
    expect(calculator.div(1,1)).toBe(1);
});

test('fully caesared', ()=>{
    expect(caesarCipher('hello operator',13)).toBe('uryyb bcrengbe');
});

test('fully caesared', ()=>{
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz',7)).toBe('hijklmnopqrstuvwxyzabcdefg');
});

test('longboy key', ()=>{
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz',55)).toBe('defghijklmnopqrstuvwxyzabc');
});

test('longboy key', ()=>{
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({average: 4, min: 1, max: 8, length: 6});
});