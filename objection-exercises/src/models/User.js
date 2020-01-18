/* eslint-disable linebreak-style */
const { HasManyRelation, ManyToManyRelation } = require('objection')
const BaseModel = require('./BaseModel')
const Pet = require('./Pet')
// const Relation = require('./Relation')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get virtualAttributes() {
    return ['fullName']
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  static get relationMappings() {
    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },
      parents: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId',
          },
          to: 'users.id',
        },
      },
      children: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId',
          },
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = User
