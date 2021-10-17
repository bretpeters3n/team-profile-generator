const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing empty 'name', 'id', and 'email' properties when called with the 'new' keyword and no parameters", () => {
      const obj = new Engineer();

      expect("name" in obj).toEqual(true);
    });

    it("should return an object containing id equal to '10' when supplied with parameters", () => {
      const name = "FirstName";
      const id = 10;
      const email = "email@email.com";

      const obj = new Engineer(name, id, email);

      expect(obj.email).toEqual("email@email.com");
    });
  });
  describe("Grab role", () => {
    it("should return an object containing 'Engineer' when running '.getRole()'", () => {
      const obj = new Engineer();

      const result = obj.getRole();

      expect(result).toEqual("Engineer");
    });
  });
});
