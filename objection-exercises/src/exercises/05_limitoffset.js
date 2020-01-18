const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const get5 = await User.query().orderBy('lastName').limit(5)
  console.log(get5)
  // Get the second 5 users, ordered by lastName
  const getNext5 = await User.query().orderBy('lastName').limit(5).offset(5)
  console.log(getNext5)
  // -----
  cleanup()
}

run()
