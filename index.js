// Psuedo code

// Ask initial question for employeeType
// Take user down that specific line of questioning

// create new objects from classes with info that would be supplied by user - fake it for now.

const employee = require("./lib/Employee");
const manager = require("./lib/Manager");
const engineer = require("./lib/Engineer");
const intern = require("./lib/Intern");

const inquirer = require("inquirer");
const fs = require("fs");

const employees = [];
const HTMLpageMIDDLEelements = [];

let HTMLpageENTIRE = "";
let HTMLpageTOP = "";
let HTMLpageMIDDLE = "";
let HTMLpageBOTTOM = "";

let cardCodeLoop = 0;
const cardCodeLoopTags = `
</div>
<div class="card-deck">
`;

const getEmployeeType = () => {
  inquirer
    .prompt([
      {
        name: "employeeType",
        type: "list",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answer) => {
      if (answer.employeeType === "Manager") {
        getManagerInfo();
      } else if (answer.employeeType === "Engineer") {
        getEngineerInfo();
      } else if (answer.employeeType === "Intern") {
        getInternInfo();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
};

getEmployeeType();

const addMoreEmployees = () => {
  inquirer
    .prompt([
      {
        name: "addMoreEmployees",
        type: "list",
        message: "Would you like to add another employee?",
        choices: ["Yes", "No"],
      },
    ])
    .then((answer) => {
      if (answer.addMoreEmployees === "Yes") {
        console.log("Employees status: " + employees);
        getEmployeeType();
      } else if (answer.addMoreEmployees === "No") {
        console.log("Employees status: " + employees);
        console.log("El Fin");
        writeHTMLpageMiddle();
      }
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
};

// name, employee ID, email address, and office number
const getManagerInfo = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the managers' name",
      },
      {
        name: "id",
        type: "input",
        message: "Enter the managers' ID#",
      },
      {
        name: "email",
        type: "input",
        message: "Enter the managers' email address",
      },
      {
        name: "phone",
        type: "input",
        message: "Enter the managers' phone number",
      },
    ])
    .then((answer) => {
      const manager01 = new manager(
        answer.name,
        answer.id,
        answer.email,
        answer.phone
      );

      employees.push(manager01);
      addMoreEmployees();
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
};

// name, employee ID, email address, and office number
const getEngineerInfo = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the engineers' name",
      },
      {
        name: "id",
        type: "input",
        message: "Enter the engineers' ID#",
      },
      {
        name: "email",
        type: "input",
        message: "Enter the engineers' email address",
      },
      {
        name: "github",
        type: "input",
        message: "Enter the engineers' github profile",
      },
    ])
    .then((answer) => {
      const engineer01 = new engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      // console.log(engineer01);
      employees.push(engineer01);
      addMoreEmployees();
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
};

// name, employee ID, email address, and office number
const getInternInfo = () => {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "Enter the interns' name",
      },
      {
        name: "id",
        type: "input",
        message: "Enter the interns' ID#",
      },
      {
        name: "email",
        type: "input",
        message: "Enter the interns' email address",
      },
      {
        name: "school",
        type: "input",
        message: "Enter the interns' school",
      },
    ])
    .then((answer) => {
      const intern01 = new intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      // console.log(intern01);
      employees.push(intern01);
      addMoreEmployees();
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
      } else {
        console.log("Something else went wrong");
      }
    });
};

HTMLpageTOP = `<!DOCTYPE html>
<html>
  <head>
    <title>My Team</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <!-- import fonts (google fonts) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Rubik&display=swap" rel="stylesheet">
    <!-- import bootstrap -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <!-- import STYLES css file -->
    <link rel="stylesheet" type="text/css" href="./css/styles.css" />
  </head>
  <body>
    <header>
      <nav><h1>My Team</h1></nav>
    </header>
    <main class="container">
      <div class="card-deck">`;

HTMLpageBOTTOM = `
    </div>
  </main>
    
    

    
  </body>

  <!-- Added link to the jQuery library -->
  <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

  <!-- Only import SLIM if you are not loading jQuery independently -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script> -->

  <!-- import POPPER for pop ups and BOOTSTRAP for bs.js -->
  <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script> -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>

  <!-- Import Javasctipt file 'script.js' -->
  <!-- <script src="./js/script.js"></script> -->

</html>`;

// const HTMLpageMIDDLE = `<div class="card-deck">

// <div class="card">
//   <div class="card-header"><h4>Name</h4><h5>Role</h5></div>
//   <div class="card-body">
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID: id</li>
//       <li class="list-group-item">Email: email</li>
//       <li class="list-group-item">Office Number: phoneNumber</li>
//     </ul>
//   </div>
// </div>

// <div class="card">
//   <div class="card-header"><h4>name</h4><h5>role</h5></div>
//   <div class="card-body">
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID: id</li>
//       <li class="list-group-item">Email: email</li>
//       <li class="list-group-item">Github: github</li>
//     </ul>
//   </div>
// </div>

// <div class="card">
//   <div class="card-header"><h4>name</h4><h5>role</h5></div>
//   <div class="card-body">
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID: id</li>
//       <li class="list-group-item">Email: email</li>
//       <li class="list-group-item">Github: github</li>
//     </ul>
//   </div>
// </div>

// </div>

// <div class="card-deck">

// <div class="card">
//   <div class="card-header"><h4>name</h4><h5>role</h5></div>
//   <div class="card-body">
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID: id</li>
//       <li class="list-group-item">Email: email</li>
//       <li class="list-group-item">Github: github</li>
//     </ul>
//   </div>
// </div>

// <div class="card">
//   <div class="card-header"><h4>name</h4><h5>role</h5></div>
//   <div class="card-body">
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item">ID: id</li>
//       <li class="list-group-item">Email: email</li>
//       <li class="list-group-item">School: school</li>
//     </ul>
//   </div>
// </div>

// </div>`;

// const HTMLpageENTIRE = HTMLpageTOP + HTMLpageMIDDLE + HTMLpageBOTTOM;

// console.log(HTMLpageENTIRE);

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

const writeHTML = () => {
  const HTML = HTMLpageENTIRE;
  writeToFile("dist/index.html", HTML);
};

const writeHTMLpageMiddle = () => {
  employees.forEach((element, index) => {
    if (cardCodeLoop === 3) {
      HTMLpageMIDDLEelements.push(cardCodeLoopTags);
      cardCodeLoop = 0;
    }
    cardCodeLoop++;
    if (element.constructor.name === "Manager") {
      const section = `
      <div class="card">
        <div class="card-header"><h4>${element.name}</h4><h5>${element.constructor.name}</h5></div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${element.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
            <li class="list-group-item">Office Number: ${element.officeNumber}</li>
          </ul>
        </div>
      </div>`;
      HTMLpageMIDDLEelements.push(section);
    } else if (element.constructor.name === "Engineer") {
      const section = `
      <div class="card">
        <div class="card-header"><h4>${element.name}</h4><h5>${element.constructor.name}</h5></div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${element.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${element.github}" target="_blank">${element.github}</a></li>
          </ul>
        </div>
      </div>`;
      HTMLpageMIDDLEelements.push(section);
    } else if (element.constructor.name === "Intern") {
      const section = `
      <div class="card">
        <div class="card-header"><h4>${element.name}</h4><h5>${element.constructor.name}</h5></div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${element.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${element.email}">${element.email}</a></li>
            <li class="list-group-item">School: ${element.school}</li>
          </ul>
        </div>
      </div>`;
      HTMLpageMIDDLEelements.push(section);
    }
  });
  HTMLpageMIDDLE = HTMLpageMIDDLEelements.join("");
  HTMLpageENTIRE = HTMLpageTOP + HTMLpageMIDDLE + HTMLpageBOTTOM;
  console.log(HTMLpageENTIRE);
  writeHTML();
};
