/* eslint-disable linebreak-style */
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  // const addMe = await User.query().insert({
  //   firstName: 'Lizzy', lastName: 'Ling', age: 18, email: 'wuhanda12@yahoo.com',
  // })
  const nameAge = await User.query().select('firstName', 'age')
  console.log(nameAge)
  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const addPet = await Pet.query().insert({
    ownerId: 'b90e82ff-8756-4d2b-83e1-ed739f4cc746',
    type: 'CAT',
    name: 'ding dong',
  })
  console.log(addPet)
  // -----
  cleanup()
}

run()
