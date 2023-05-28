// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
//isPhoneNumber Tests
test('123-456-7891 is valid phone number', () => {
    expect(functions.isPhoneNumber("123-456-7891")).toBe(true);
});
test('(123)-468-1231 is valid phone number', () => {
    expect(functions.isPhoneNumber("(123)-468-1231")).toBe(true);
});
test('12345678920 is invalid phone number', () => {
    expect(functions.isPhoneNumber("12345678920")).toBe(false);
});
test('(1234)123222 is invalid phone number', () => {
    expect(functions.isPhoneNumber("(1234)123222")).toBe(false);
});

//isEmail Tests
test('hello@gmail.com is valid email', () => {
    expect(functions.isEmail("hello@gmail.com")).toBe(true);
});
test('adp005@ucsd.edu is a valid email', () => {
    expect(functions.isEmail("adp005@ucsd.edu")).toBe(true);
});
test('hello@gmail is not a valid email', () => {
    expect(functions.isEmail("hello@gmail")).toBe(false);
});
test('adp005 ucsd.edu is not a valid email', () => {
    expect(functions.isEmail("adp005 ucsd.edu")).toBe(false);
});

// isStrongPassword tests
test('a17579041 is a strong password', () => {
    expect(functions.isStrongPassword("a17579041")).toBe(true);
});
test('adsoifyv2489 is a strong password', () => {
    expect(functions.isStrongPassword("adsoifyv2489")).toBe(true);
});
test('123 is not a strong password', () => {
    expect(functions.isStrongPassword("123")).toBe(false);
});
test('ab1 is not a strong password', () => {
    expect(functions.isStrongPassword("ab1")).toBe(false);
});

//isDate Tests
test('10/1/2002 is a valid date', () => {
    expect(functions.isDate("10/1/2002")).toBe(true);
});
test('5/28/2023 is a valid date', () => {
    expect(functions.isDate("5/28/2023")).toBe(true);
});
test('5/2/23 is not a valid date', () => {
    expect(functions.isDate("5/2/23")).toBe(false);
});
test('05-18-2022 is not a valid date', () => {
    expect(functions.isDate("05-18-2022")).toBe(false);
});

//isHexColor Test
test('#F90 is a valid hex color', () => {
    expect(functions.isHexColor("#F90")).toBe(true);
});
test('#008080 is a valid hex color', () => {
    expect(functions.isHexColor("#008080")).toBe(true);
});
test('#GHIJKL is not a valid hex color', () => {
    expect(functions.isHexColor("GHIJKL")).toBe(false);
});
test('12345 is not a valid hex color', () => {
    expect(functions.isHexColor("12345")).toBe(false);
});