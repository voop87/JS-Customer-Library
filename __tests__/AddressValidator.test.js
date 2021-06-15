const {Address} = require("../src/Address");
const {AddressValidator} = require("../src/AddressValidator");

test("Should be able to create Address Validator", () => {
  const addressValidator = new AddressValidator();
  expect(addressValidator).not.toBe(null);
});

test("Should have validate() method", () => {
  const addressValidator = new AddressValidator();
  addressValidator.Validate();
});

test("Should be able to accept Address as parameter for Validate()", () => {
  const addressValidator = new AddressValidator();
  const address = new Address();
  addressValidator.Validate(address);
});

test("Should be able to return error messages if Address is empty", () => {
  const addressValidator = new AddressValidator();

  const address = new Address();

  const results = addressValidator.Validate(address);

  expect(results[0]).toBe("The field is required");
  expect(results[1]).toBe("The field is required");
  expect(results[2]).toBe("The field is required");
  expect(results[3]).toBe("The field is required");
  expect(results[4]).toBe("The field is required");
});

test("Should return certain errors if Address is invalid", () => {

  const addressValidator = new AddressValidator();

  const address = new Address("12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
      "12345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890",
      3,
      "dwadawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
      "1234567",
      "awdwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
      "Russia",
  );

  const results = addressValidator.Validate(address);

  expect(results[0]).toBe("Maximum length is 100");
  expect(results[1]).toBe("Maximum length is 100");
  expect(results[2]).toBe("Only two options allowed: 1 or 2");
  expect(results[3]).toBe("Maximum length is 50");
  expect(results[4]).toBe("Maximum length is 6");
  expect(results[5]).toBe("Maximum length is 20");
  expect(results[6]).toBe("Only United States or Canada allowed");
});

test("Should return no errors is Address is valid", () => {

  const addressValidator = new AddressValidator();

  const address = new Address("addressLine1",
      "addressLine2",
      1,
      "Chicago",
      "123456",
      "Illinois",
      "United States",
  );

  const results = addressValidator.Validate(address);

  expect(results.length).toBe(0);
});