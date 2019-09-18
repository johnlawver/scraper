const fs = require("fs");


//parse json file
let request = JSON.parse(fs.readFileSync("response.json"));

//create an emty object to hold new hire info
let newHire = new Object();

//Create a function that takes firtname last name and employee type to generate email and staging ou
let createEmail = newHire => {
  if (newHire.teamMemberType === "Core") {
    domain = "@iherb.com";
    newHire.ou = '2fa not enforced/new users pending 2fa activation'
  } else {
    domain = "@external.iherb.com";
    newHire.ou = 'external users/2fa not enforced (external)'
  }
  newHire.adName = `${newHire.firstName}.${newHire.lastName}`.toLocaleLowerCase();
  newHire.email = `${newHire.adName}${domain}`
};

let createName = newHire => {
  let name =''
  if (newHire.preferredName == "None" || newHire.firstName.toLocaleLowerCase() == newHire.preferredName.toLocaleLowerCase()) {
    name = `${newHire.firstName} ${newHire.lastName}`
  } else {
    name = `${newHire.preferredName} (${newHire.firstName}) ${newHire.lastName}`
  }
  return name
}

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
newHire.preferredName = request.fields.customfield_10126? request.fields.customfield_10126 : 'None'
newHire.name = createName(newHire);
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