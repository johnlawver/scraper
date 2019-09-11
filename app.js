
var fs = require('fs')
var generatePassword = require('password-generator');

const args = process.argv.slice(2);
const firstName = args[0];
const lastName = args[1];
const name = `${firstName} ${lastName}`
const password = generatePassword(9, false);
const ad = `${firstName}.${lastName}`;
const email = `${ad}@external.iherb.net`.toLocaleLowerCase();

const csvLine = `${name}, ${email}, ${password}`+'\r\n'
const bulkCSV = `NEW, ${email}, , ${firstName}, ${lastName}, ${password}, , YES, , SHOW` + '\r\n'

fs.appendFile('log.csv', `${csvLine}`, function (err) {
    if (err) {
      console.log(err)
    } else {
      console.log(`${firstName} Added`)
    }
  })

  fs.appendFile('bulk.csv', `${bulkCSV}`, function (err) {
    if (err) {
      console.log(err)
    } else {
      // done
    }
  })

// console.log('FIRST NAME')
// console.log(firstName)
// console.log('')
// console.log('LAST NAME')
// console.log(lastName)
// console.log('')
// console.log('EMAIL')
// console.log(email);
// console.log('')
// console.log('PASSWORD')
// console.log(password);
