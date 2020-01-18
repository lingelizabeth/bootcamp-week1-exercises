/* eslint-disable linebreak-style */
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')


const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const allFullnames = await User.query()
  console.log(allFullnames[0].fullName)
  console.log(allFullnames[1].fullName)

  // -----
  cleanup()
}

run()
