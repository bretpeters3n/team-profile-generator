const Employee = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing empty 'name', 'id', and 'email' properties when called with the 'new' keyword and no parameters", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing id equal to '10' when supplied with parameters", () => {
      const name = "FirstName";
      const id = 10;
      const email = "email@email.com";

      const obj = new Employee(name, id, email);

      expect(obj.id).toEqual(10);
    });
  });
  describe("Grab role", () => {
    it("should return an object containing 'Employee' when running '.getRole()'", () => {
      const obj = new Employee();

      const result = obj.getRole();

      expect(result).toEqual("Employee");
    });
  });
});
