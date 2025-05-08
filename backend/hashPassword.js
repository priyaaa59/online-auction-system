const bcrypt = require('bcrypt');

async function hashPassword() {
  const password = 'password123'; // The password you want to hash
  const saltRounds = 10; // Number of salt rounds for bcrypt
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword); // Copy this hash
  } catch (error) {
    console.error('Error hashing password:', error);
  }
}

hashPassword();
