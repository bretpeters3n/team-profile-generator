class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    console.log("==================");
    console.log(this.name);
    return this;
  }
  getId() {
    console.log(this.id);
    return this;
  }
  getEmail() {
    console.log(this.email);
    return this;
  }
  getRole() {
    console.log("Employee");
    return "Employee";
  }
}

module.exports = Employee;
