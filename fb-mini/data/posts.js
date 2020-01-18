const casual = require('casual')
const userData = require('./users')

casual.define('post', (ownerId)=>({
    post_id:casual.uuid,
    num_likes:casual.integer(from=0, to=5000),
    text:casual.sentences(n=3),
    userid:ownerId,
    created_at: casual.moment,
    updated_at: casual.moment,
}))

const postData = []
for (let i = 0; i < 20; ++i) {
    const ownerId = casual.random_element(userData).id
    postData.push(casual.post(ownerId))
}
  
module.exports = postData
  