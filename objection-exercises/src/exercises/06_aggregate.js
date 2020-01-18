const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const getCount = await User.query().resultSize()
  console.log(getCount)
  // Get the average age of users
  const getAvgAge = await User.query().avg('age as avgAge')
  console.log(getAvgAge)
  // Get the total number of dogs
  const getNumDogs = await Pet.query().where('type', 'DOG').resultSize()
  console.log(getNumDogs)
  // -----
    .cleanup()
}

run()
