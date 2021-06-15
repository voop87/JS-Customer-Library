const _ = require("lodash");

class CustomerValidator {

  Validate(customer){

    const results = [];

    if (!customer) return [];

    const properties = Object.getOwnPropertyNames(customer);

    if (properties.length != 0) {

      properties.forEach(property => {

        switch (property) {
          case "firstName":
            if (customer.firstName && customer.firstName.length > 50) {
              results.push(`${_.replace(property, "firstName", 
              "First name")} maximum length is 50`);
            }
            break;

          case "lastName":
            if (!customer.lastName) {
              results.push(`${_.replace(property, "lastName", 
              "Last name")} is required`);
            } else {
              if (customer.lastName.length > 50) {
                results.push(`${_.replace(property, "lastName", 
                "Last name")} maximum length is 50`);
              }
            }
            break;

          case "addresses":
            if (!customer.addresses) {
              results.push(`At least one address in ${property} is required`);
            } else {
                if (customer.addresses.length === 0) {
                  results.push(`At least one address in ${property} is required`);
                }
              }
            break;

          case "phoneNumber":
            if (customer.phoneNumber) {
              if (customer.phoneNumber.trim().
                  split(" ").
                  join().
                  match(new RegExp("^\\+?\\d{10,14}$")) === null) {
                results.push(`${_.replace(property, "phoneNumber", "Phone number")} should be in E.164 format`);
              }
            }
            break;

          case "email":
            if (customer.email) {
              if (!customer.email.match(new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))) {
                  results.push(`${_.replace(property, "e", "E")} address accepts only email format`);
              }
            }
            break;

          case "notes":
            if (!customer.notes) {
              results.push(`At least one note in ${property} is required`);
            } else {
                if (customer.notes.length === 0) {
                  results.push(`At least one note in ${property} is required`);
                }
            }
            break;

          case "totalPurchaseAmount":
            if (customer.totalPurchaseAmount) {
              if (!Number.parseFloat(customer.totalPurchaseAmount)) {
                results.push(`${_.replace(property, "totalPurchaseAmount", "Total purchase amount")} should be 'money' type`);
              }
            }
            break;

          case "lastPurchaseDate":
            if (customer.lastPurchaseDate < Date.UTC(2020, 1, 1)){
              results.push(`${_.replace(property, "lastPurchaseDate", 
              "Last purchase date")} cannot be lower than 2020-1-1`);
            }
            break;
        }
      })
    }
    return results;
  }
}

module.exports = {
  CustomerValidator
}