/* eslint-disable linebreak-style */
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
// const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  const newPerson = await User.transaction(async trx => {
    const deletePerson = await User.query().delete().where({ firstName: 'Jane' })
    const person = await User.query().insert({
      firstName: 'Jane',
      lastName: 'Kim',
      email: 'jane@college.harvard.edu',
    }).returning('*')

    const pet = await person.$relatedQuery('pets', trx).insert({
      name: 'Sammy',
      type: 'DOG',
    })

    const totalNum = await User.query().resultSize()
    if (totalNum > 15) {
      const noBirds = await User.query().delete().where({ type: 'BIRD' })
    }
  })


  // -----
  cleanup()
}

run()
