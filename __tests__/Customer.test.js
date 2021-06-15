const {Customer} = require("../src/Customer");
const {Address} = require("../src/Address");

test("Should be able to create Customer", () => {
  const customer = new Customer();
  expect(customer).not.toBe(null);
})

test("Should be able to create Customer with params", () => {

  const addressLine1 = new Address("addressLine1",
      "addressLine2",
      1,
      "Denver",
      "123456",
      "NY",
      "United States"
      );
  const addressLine2 = new Address("addressLine3",
      "addressLine4",
      2,
      "York",
      "789123",
      "Seattle",
      "Canada"
  );

  const addresses = [addressLine1, addressLine2];
  const notes = ["",""];
  const date = Date.now();

  const customer = new Customer(
      "Vasya",
      "Petrov",
      addresses,
      "+79111111111",
      "mail@gmail.com",
      notes,
      1565.2,
      date
      );

  expect(customer.firstName).toBe("Vasya");
  expect(customer.lastName).toBe("Petrov");

  expect(customer.addresses[0].addressLine1).toBe("addressLine1");
  expect(customer.addresses[0].addressLine2).toBe("addressLine2");
  expect(customer.addresses[0].addressType).toBe(1);
  expect(customer.addresses[0].city).toBe("Denver");
  expect(customer.addresses[0].postalCode).toBe("123456");
  expect(customer.addresses[0].state).toBe("NY");
  expect(customer.addresses[0].country).toBe("United States");

  expect(customer.addresses[1].addressLine1).toBe("addressLine3");
  expect(customer.addresses[1].addressLine2).toBe("addressLine4");
  expect(customer.addresses[1].addressType).toBe(2);
  expect(customer.addresses[1].city).toBe("York");
  expect(customer.addresses[1].postalCode).toBe("789123");
  expect(customer.addresses[1].state).toBe("Seattle");
  expect(customer.addresses[1].country).toBe("Canada");

  expect(customer.phoneNumber).toBe("+79111111111");

  expect(customer.notes[0]).toBe("");
  expect(customer.notes[1]).toBe("");

  expect(customer.totalPurchaseAmount).toBe(1565.2);
  expect(customer.lastPurchaseDate).toBe(date);
})