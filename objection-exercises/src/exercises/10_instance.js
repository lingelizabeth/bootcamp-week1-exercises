/* eslint-disable linebreak-style */
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
// const Pet = require('../models/Pet')
const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const lizzy = await User.query().findById('b90e82ff-8756-4d2b-83e1-ed739f4cc746')
  console.log(lizzy)
  // Use that instance to create a new pet related that user
  const newPet = await lizzy.$relatedQuery('pets').insert({ name: 'kiki', type: 'ALLIGATOR' }).returning('*')
  console.log(newPet)
  // Use that instance to get all of the user's pets and children
  const getPets = await lizzy.$fetchGraph('pets')
  const getChildren = await lizzy.$fetchGraph('children')
  console.log(getPets)
  console.log(getChildren)
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  // -----
  cleanup()
}

run()
