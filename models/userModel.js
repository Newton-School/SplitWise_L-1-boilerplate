const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
/*
Sample Object: 
{
  "_id": "614dd61e8d48c238f9dca5f1",
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123",
  "createdAt": "2021-09-25T12:00:00.000Z",
  "updatedAt": "2021-09-25T12:30:00.000Z",
}

/*
Build a User Model to store the user data, it should contain:

username: A required string field to store the unique username of the user.

email: A required string field to store the unique email address of the user.

password: A required string field to store the password of the user. The field should have a validator to check that the password is at least 8 characters long. The password should be hashed using bcrypt before being saved to the database.

*/
const userSchema = new mongoose.Schema(
  {
    //Write a schema for user here
  },
  { timestamps: true }
);

// pre-save hook to hash password before saving to the database
userSchema.pre('save', async function (next) {
  const user = this;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model('User', userSchema);
