class Address {
  constructor(
    addressLine1,
    addressLine2,
    addressType,
    city,
    postalCode,
    state,
    country
  ) {
    this.addressLine1 = addressLine1;
    this.addressLine2 = addressLine2;
    this.addressType = addressType;
    this.city = city;
    this.postalCode = postalCode;
    this.state = state;
    this.country = country;
  }
}

module.exports = {
  Address
}