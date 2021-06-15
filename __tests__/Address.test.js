const {Address} = require("../src/Address");

test ("Should be able to create Address", () => {
  const address = new Address();
  expect(address).not.toBe(null);
});

test ("Should be able to create Address with params", ()=> {
  const address = new Address("Address line1",
      "Address line2",
      1,
      "Novosibirsk",
      "123456",
      "Novosibirsk Area",
      "Russia"
      );
  expect(address.addressLine1).toBe("Address line1");
  expect(address.addressLine2).toBe("Address line2");
  expect(address.addressType).toBe(1);
  expect(address.city).toBe("Novosibirsk");
  expect(address.postalCode).toBe("123456");
  expect(address.state).toBe("Novosibirsk Area");
  expect(address.country).toBe("Russia");
});