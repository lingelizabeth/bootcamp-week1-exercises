/* eslint-disable linebreak-style */
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const addPeter = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'peter@college.harvard.edu',
    pets: [{
      name: 'Rocco', type: 'DOG',
    }, {
      name: 'Rosey', type: 'DOG',
    }],
  }).returning('*')
  console.log(addPeter)
  // -----
  cleanup()
}

run()
