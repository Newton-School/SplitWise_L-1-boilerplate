const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const JWT_SECRET = 'newtonSchool';

const decodeToken = (req, res, next) => {
  try {
    let { token } = req.body;
    console.log(token);
    const decodedToken = jwt.verify(token, JWT_SECRET);
    res.status(200).json({ payload: decodedToken, status: 'Success' });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

/*
Instructions:
You need to implement a controller function called signup that handles the user signup process. The function receives a POST request with the user's username, email, and password. It creates a new user record in the database with the provided information 

Sample Input and Output:

Successful signup:

Input:
json
Copy code
{
  "username": "john_doe",
  "email": "johndoe@example.com",
  "password": "123456"
}

Output:
{
  "status": "success",
  "data": {
    "user": {
      "username": "john_doe",
      "email": "johndoe@example.com",
      "password": "examplePassword",
    }
  }
}

Internal Server Error:
Input:
(Assume a server/database error occurred during user creation)
Output:
{
  "status": "error",
  "message": "Internal Server Error",
  "error": "Error message describing the issue"
}
*/

const signup = async (req, res, next) => {
  try {
    //Write a code here for singnup
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

/*
Problem Statement: Login Controller
You need to implement a controller function called login that handles user login. The function receives a POST request with the user's email and password. It validates the presence of the email and password, checks if the provided credentials match an existing user record, generates a JSON Web Token (JWT) if the credentials are valid, and returns the token as a response. If the email or password is missing, or if the provided credentials do not match any user, it should return a JSON response with an appropriate error message and status code. In case of any errors during the process, it should return a JSON response with a status of "error," an appropriate error message, and the error details.

Sample Input and Output:
Successful login:
Input:
{
  "email": "johndoe@example.com",
  "password": "123456"
}
Output:
{
  "token": "<generated JWT token>",
  "status": "Success"
}
Missing Email or Password Error:
Input:
{
  "email": "",
  "password": "123456"
}
Output:
{
  "message": "Please provide email and password",
  "status": "Error"
}
Invalid Credentials Error:

Input:
{
  "email": "johndoe@example.com",
  "password": "wrongpassword"
}
Output:
{
  "message": "Invalid email or password",
  "status": "Error",
  "error": "Invalid Credentials"
}
Internal Server Error:
Input:
(Assume a server/database error occurred during user retrieval, password comparison, or JWT generation)
Output:
{
  "status": "error",
  "message": "Internal Server Error",
  "error": "Error message describing the issue"
}
 */
const login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Please provide email and password',
      status: 'Error',
    });
  }

  try {
    //Write a code here for login user
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
      error: err.message,
    });
  }
};

module.exports = { login, signup, decodeToken };
