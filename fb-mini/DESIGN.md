Let's make a Mini FaceBook app! Before we start building the database, however, we need to come up with a schema--or an outline for how it should look. Our database should contain at least 3 tables: users, posts, and friends. The users table should contain personal data pertaining to a particular user, such as first & last name, date of birth, password, a short bio, etc. The posts table (we'll just do text-only posts for now) should store a string of text, a date posted, and the number of likes. The friends table tracks data pertaining to an individual "friendship"--this means it should store the user ID of the "requestor" and "requested", a date requested, a status (whether it has been accepted/declined/requested), and anything else you want associated with a friendship.

users
int: id,
strings: first_name, last_name, password, bio, pfp
date: dob


posts
int: id, num_likes
strings: text
date: date_posted

friends
int: id, requestor_id, requested_id
strings: status 
date: date