const {Person} = require("../src/Person");

test("Should be able to create Person",() => {
  const person = new Person();
  expect(Person).not.toBe(null);
})
test("Should be able to create Person with first name and last name",() => {
  const person = new Person("Vasya", "Petrov");
  expect(person.firstName).toBe("Vasya");
  expect(person.lastName).toBe("Petrov");
})