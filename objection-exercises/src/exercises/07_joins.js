const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
// const Pet = require('../models/Pet')
// const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const getUserPets = await User.query().withGraphFetched('pets')
  // console.log(getUserPets)

  // const allPets = await Pet.query()
  // console.log(allPets)
  // Get all users, their pets, AND their children
  const getUserPetsChildren = await User.query().withGraphFetched('[pets, children]')
  // console.log(getUserPetsChildren)

  // Get all users, their parents, and their grandparents
  const getUserParentsGrand = await User.query().withGraphFetched('parents.parents')
  console.log(getUserParentsGrand[0].parents[0].parents)

  // Get all users, their pets, their children, and their childrens' pets
  const getUserPCCP = await User.query().withGraphFetched('[pets, children.pets]')
  console.log(getUserPCCP)

  // -----
  cleanup()
}

run()
