const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

async function register(req, res) {
  try {
    const { name, email, password } = req.body;
    await userService.registerUser(name, email, password);
    res.json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    
    // Check if the user exists in the database
    const user = await userService.loginUser(email, password);

    if (!user) {
      // If the user doesn't exist, return an error
      return res.status(401).json({ error: 'User not found or invalid credentials' });
    }

    // If the user exists, create a JWT token
    const payload = { id: user._id, name: user.name };

    jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({
        success: true,
        message: 'Login successful',
      });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  register,
  login,
};
