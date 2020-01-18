const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  first_name: casual.first_name,
  last_name: casual.last_name,
  password: casual.password,
  bio: casual.sentences(n=1),
  pfp: casual.url,
  dob: casual.moment,
  created_at: casual.moment,
  updated_at: casual.moment,
}))


const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
