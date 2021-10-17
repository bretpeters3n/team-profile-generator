const Manager = require("../lib/manager");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing empty 'name', 'id', and 'email' properties when called with the 'new' keyword and no parameters", () => {
      const obj = new Manager();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing id equal to '10' when supplied with parameters", () => {
      const name = "FirstName";
      const id = 10;
      const email = "email@email.com";
      const officeNumber = "555-555-5555";

      const obj = new Manager(name, id, email, officeNumber);

      expect(obj.officeNumber).toEqual("555-555-5555");
    });
  });
  describe("Grab role", () => {
    it("should return an object containing 'Manager' when running '.getRole()'", () => {
      const name = "FirstName";
      const id = 10;
      const email = "email@email.com";
      const officeNumber = "555-555-5555";

      const obj = new Manager(name, id, email, officeNumber);

      const result = obj.getOfficeNumber();

      expect(result).toEqual("555-555-5555");
    });
  });
});
