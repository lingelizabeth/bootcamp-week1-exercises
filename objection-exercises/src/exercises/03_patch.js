/* eslint-disable linebreak-style */
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')


const run = async () => {
  // Write Queries and Logs Here !!!

  // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)
  const changeAge = await User.query().patch({ age: 15 }).where({ firstName: 'Jane' })
  const patched = await User.query().patch({ age: 18 }).whereBetween('age', [0, 17]).returning('*')
  console.log(patched) // returns the 2 items that were patched, w/o it it returns 0
  const nameAge = await User.query().select('firstName', 'age')
  console.log(nameAge)
  // -----
  cleanup()
}

run()
