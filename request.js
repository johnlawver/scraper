const fs = require("fs");

//parse json file
let request = JSON.parse(fs.readFileSync("response.json"));

//create an emty object to hold new hire info
let newHire = new Object();

//Create a function that takes firtname last name and employee type to generate email and staging ou
let createEmail = newHire => {
  if (newHire.teamMemberType === "Core") {
    domain = "@iherb.com";
    ////////////////////////////////////////confirm OU before using//////////////////
    newHire.ou = 'new Hire Pending 2FA'
  } else {
    domain = "@external.iherb.com";
    newHire.ou = 'external users/2fa not enforced (external)'
  }

  newHire.email = `${newHire.firstName}.${newHire.lastName}${domain}`.toLocaleLowerCase();
};

//extract value fields from software and hardware arrays
let extractValues = (arrayItem) => {
  //ensure item is not null
  if (arrayItem) {
    let valueArray = []
    arrayItem.forEach(element => {
      valueArray.push(element.value)
    });
    return valueArray;
  }
}

//Define object fields with basic logic to remove null fields 
newHire.firstName =  request.fields.customfield_10124 ?request.fields.customfield_10124 : 'NOT DEFINED'
newHire.lastName = request.fields.customfield_10125? request.fields.customfield_10125 : 'NOT DEFINED'
newHire.startDate = request.fields.customfield_10129? request.fields.customfield_10129: 'NOT DEFINED'
newHire.title = request.fields.customfield_10127? request.fields.customfield_10127: 'NOT DEFINED'
newHire.manager = request.fields.customfield_10128? request.fields.customfield_10128:'NOT DEFINED'
newHire.personToMirror = request.fields.customfield_10132? request.fields.customfield_10132:'None'
newHire.vpn = request.fields.customfield_10136? request.fields.customfield_10136.value:'No'
newHire.emailAccess = request.fields.customfield_10141.value? request.fields.customfield_10141.value:'No'
newHire.cubicle = request.fields.customfield_10140? request.fields.customfield_10140:'NOT DEFINED'
newHire.labelsArray = request.fields.labels? request.fields.labels:'NOT DEFINED'
newHire.location = request.fields.customfield_10104.value? request.fields.customfield_10104.value: 'NOT DEFINED'
newHire.department = request.fields.customfield_10109.value? request.fields.customfield_10109.value:'NOT DEFINED'
newHire.teamMemberType = request.fields.customfield_10111? request.fields.customfield_10111.value : 'Core';
newHire.classification = request.fields.customfield_10131? request.fields.customfield_10131.value : 'NOT DEFINED'
newHire.hardwareArray = extractValues(request.fields.customfield_10133)
newHire.software = extractValues(request.fields.customfield_10135)
createEmail(newHire);

let getEmployeeObject = () => newHire;

module.exports = getEmployeeObject;