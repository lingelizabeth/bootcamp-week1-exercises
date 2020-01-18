/* eslint-disable linebreak-style */
// Write your Pet model here!
const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')
const User = require('./User')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get relationMappings() {
    return {
      users: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'pets.id',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Pet
