const {Person} = require("./Person");

class Customer extends Person {
constructor(
  firstName,
  lastName,
  addresses,
  phoneNumber,
  email,
  notes,
  totalPurchaseAmount,
  lastPurchaseDate) {
    super(firstName, lastName),
    this.addresses = addresses,
    this.phoneNumber = phoneNumber,
    this.email = email;
    this.notes = notes,
    this.totalPurchaseAmount = totalPurchaseAmount,
    this.lastPurchaseDate = lastPurchaseDate
  }
}
module.exports = {
  Customer
}