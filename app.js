const fs = require("fs");
const generatePassword = require("password-generator");
const getEmployeeObject = require("./request");
const password = generatePassword(9, false);

const emp = getEmployeeObject()

//console.log(emp)
const csvLine = `${emp.name}, ${emp.email}, ${password}, ${emp.adName}, ${password}` + "\r\n";
const bulkCSV =
  `NEW, ${emp.email}, , ${emp.firstName}, ${emp.lastName}, ${password}, , YES, , SHOW, , , , ,${emp.ou}, , , , ${emp.title}, ${emp.department}, ${emp.manager}` +
  "\r\n";

  fs.appendFile("./output/tempPwLog.csv", `${csvLine}`, function(err) {
    if (err) {
      console.log(err);
    } 
  });
  
  fs.appendFile("./output/bulkUpload.csv", `${bulkCSV}`, function(err) {
    if (err) {
      console.log(err);
    } 
  });