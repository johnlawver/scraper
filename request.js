const fs = require("fs");

let request = JSON.parse(fs.readFileSync("response.json"));
let newHire = new Object();

let createEmail = newHire => {
  if (newHire.teamMemberType === "Core") {
    domain = "@iherb.com";
  } else {
    domain = "@external.iherb.com";
  }

  return `${newHire.firstName}.${newHire.lastName}${domain}`.toLocaleLowerCase();
};
//let hardwareArray = request.fields.customfield_10133;

newHire.firstName = request.fields.customfield_10124;
newHire.lastName = request.fields.customfield_10125;
newHire.startDate = request.fields.customfield_10129;
newHire.title = request.fields.customfield_10127;
newHire.manager = request.fields.customfield_10128;
newHire.personToMirror = request.fields.customfield_10132;
newHire.vpn = request.fields.customfield_10136.value;
newHire.emailAccess = request.fields.customfield_10141.value;
newHire.cubicle = request.fields.customfield_10140;
newHire.labelsArray = request.fields.labels;
newHire.location = request.fields.customfield_10104.value;
newHire.department = request.fields.customfield_10109.value;
newHire.teamMemberType = request.fields.customfield_10111.value;
//POC Needs a foreach loop to get all hardware when more than one is selected
newHire.hardwareArray = request.fields.customfield_10133[0].value;
newHire.classification = request.fields.customfield_10131.value;
newHire.email = createEmail(newHire);

let getEmployeeObject = () => newHire;

module.exports = getEmployeeObject;

//console.log(newHire);
//console.log(newHire);
// console.log(labelsArray);
// console.log(location);
// console.log(department);
// console.log(teamMemberType);
// console.log(firstName);
// console.log(lastName);
// console.log(title);
// console.log(manager);
console.log(newHire.hardwareArray);
// console.log(cubicle);
// console.log(classification);
// console.log(`vpn: ${vpn}`);
// console.log(`email: ${emailAccess}`);
// console.log(startDate);
