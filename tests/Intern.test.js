const Intern = require("../lib/intern");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing empty 'name', 'id', and 'email' properties when called with the 'new' keyword and no parameters", () => {
      const obj = new Intern();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing id equal to '10' when supplied with parameters", () => {
      const name = "FirstName";
      const id = 10;
      const email = "email@email.com";

      const obj = new Intern(name, id, email);

      expect(obj.name).toEqual("FirstName");
    });
  });
  describe("Grab role", () => {
    it("should return an object containing 'Intern' when running '.getRole()'", () => {
      const obj = new Intern();

      const result = obj.getRole();

      expect(result).toEqual("Intern");
    });
  });
});
