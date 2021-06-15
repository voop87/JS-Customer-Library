const {Customer} = require("../src/Customer");
const {Address} = require("../src/Address");
const {CustomerValidator} = require("../src/CustomerValidator");

test("Should be able to create Customer Validator", () => {
  const customerValidator = new CustomerValidator();
  expect(customerValidator).not.toBe(null);
});

test("Should have Validate method", () => {
  const customerValidator = new CustomerValidator();
  customerValidator.Validate();
});

test("Should be able to return error messages if Customer is empty", () => {
  const customerValidator = new CustomerValidator();
  const customer = new Customer();

  const results = customerValidator.Validate(customer);

  expect(results[0]).toBe("Last name is required");
  expect(results[1]).toBe("At least one address in addresses is required");
  expect(results[2]).toBe("At least one note in notes is required");
  expect(results.length).toBe(3);
});

test("Should be able to return error messages if Customer has invalid fields", () => {

  const customerValidator = new CustomerValidator();
  const address = new Address();

  const customer = new Customer("First Name First Name First Name First Name First Name First Name First Name First Name First Name First Name",
      "Last Name Last Name Last Name Last Name Last Name Last Name Last Name Last Name Last Name Last Name Last Name",
      [],
      "123",
      "123",
      [],
      "money",
      Date.UTC(2019,12,31)
      );

  const results = customerValidator.Validate(customer);

    expect(results[0]).toBe("First name maximum length is 50");
    expect(results[1]).toBe("Last name maximum length is 50");
    expect(results[2]).toBe("At least one address in addresses is required");
    expect(results[3]).toBe("Phone number should be in E.164 format");
    expect(results[4]).toBe("Email address accepts only email format");
    expect(results[5]).toBe("At least one note in notes is required");
    expect(results[6]).toBe("Total purchase amount should be 'money' type");
    expect(results[7]).toBe("Last purchase date cannot be lower than 2020-1-1");
    expect((results.length)).toBe(8);

});

test("Should not return error message if totalPurchaseAmount is null", () => {

  const customerValidator = new CustomerValidator();
  const address = new Address();

  const customer = new Customer(
      "First Name",
      "Last Name",
      [address],
      "+79111111111",
      "123@mail.com",
      [""],
      null,
      Date.UTC(2020,12,31)
  );

  const results = customerValidator.Validate(customer);

  expect(results.length).toBe(0);
});