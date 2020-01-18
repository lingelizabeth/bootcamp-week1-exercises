/* eslint-disable linebreak-style */
const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const noCats = await Pet.query().delete().where('type', 'CAT').returning('*')
  console.log(noCats) // returning returns deleted item, otherwise # of deleted items
  // const allPets = await Pet.query()
  // console.log(allPets)
  // -----
  cleanup()
}

run()
