const casual = require('casual')
const userData = require('./users')

casual.define('friend', (person1, person2)=>({
    friendship_id:casual.uuid,
    requestor_id: person1,
    requested_id: person2,
    accepted: casual.boolean,
    created_at: casual.moment,
    updated_at: casual.moment,
}))

const friendData = []
for (let i = 0; i < 20; ++i) {
    const person1 = casual.random_element(userData).id
    userDataMinusOne = userData.filter(user => user.id != person1)
    const person2 = casual.random_element(userDataMinusOne).id
    friendData.push(casual.friend(person1, person2))
}
  
module.exports = friendData
  