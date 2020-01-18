/* eslint-disable linebreak-style */
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const getClement = await User.query().where('firstName', 'Clement')
  console.log(getClement)

  // Do the same with object notation
  const getClement2 = await User.query().where({ firstName: 'Clement' })
  console.log(getClement2)

  // Get all DOGS and BIRDS
  const dogsAndBirds = await Pet.query().where('type', 'DOG').orWhere('type', 'BIRD')
  console.log(dogsAndBirds)

  // -----
  cleanup()
}

run()
