const {Address} = require("./Address")

class AddressValidator {

  Validate (address) {

    const results = [];

    if (!address) {
      return [];
    }

    const properties = Object.getOwnPropertyNames(address);

    if (properties.length > 0) {
      properties.forEach(property => {
        switch (property) {
          case "addressLine1":
            if (!address.addressLine1) {
              results.push("The field is required");
            } else {
              if (address.addressLine1.length > 100){
                results.push("Maximum length is 100");
              };
            };
            break;

          case "addressLine2":
            if (address.addressLine2 && address.addressLine2.length > 100) {
              results.push("Maximum length is 100")
            };
            break;

          case "addressType":
            if (address.addressType && (!(address.addressType === 1 || address.addressType === 2))) {
              results.push("Only two options allowed: 1 or 2");
            };
            break;

          case "city":
            if (!address.city) {
              results.push("The field is required");
            } else {
              if (address.city.length > 50) {
                results.push("Maximum length is 50");
              };
            };
            break;

          case "postalCode":
            if (!address.postalCode) {
              results.push("The field is required");
            } else {
              if (address.postalCode.length > 6) {
                results.push("Maximum length is 6");
              };
            };
            break;

          case "state":
            if (!address.state) {
              results.push("The field is required");
            } else {
              if (address.state.length > 20) {
                results.push("Maximum length is 20");
              };
            };
            break;

          case "country":
            if (!address.country) {
              results.push("The field is required");
            } else {
              if (!(address.country === "United States" || address.country === "Canada")) {
                results.push("Only United States or Canada allowed");
              };
            };
            break;
        };
      });
    }
    return results;
  }
}

module.exports = {
  AddressValidator
}