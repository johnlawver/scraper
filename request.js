const fs = require("fs");

let request = JSON.parse(fs.readFileSync("response.json"));

let personToMirror = request.fields.customfield_10132;
let labelsArray = request.fields.labels;
let location = request.fields.customfield_10104.value;
let department = request.fields.customfield_10109.value;
let teamMemberType = request.fields.customfield_10111.value;
let firstName = request.fields.customfield_10124;
let lastName = request.fields.customfield_10125;
let title = request.fields.customfield_10127;
let manager = request.fields.customfield_10128;
let hardwareArray = request.fields.customfield_10133;
let cubicle = request.fields.customfield_10140;
let classification = request.fields.customfield_10131.value;
let vpn = request.fields.customfield_10136.value;
let startDate = request.fields.customfield_10129;
let emailAccess = request.fields.customfield_10141.value;

console.log(personToMirror);
console.log(labelsArray);
console.log(location);
console.log(department);
console.log(teamMemberType);
console.log(firstName);
console.log(lastName);
console.log(title);
console.log(manager);
console.log(hardwareArray);
console.log(cubicle);
console.log(classification);
console.log(`vpn: ${vpn}`);
console.log(`email: ${emailAccess}`);
console.log(startDate);
