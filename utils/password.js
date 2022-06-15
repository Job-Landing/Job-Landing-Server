import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

class Password {
  static async toHash(password) {
    const salt = await randomBytes(8);
    const buffer = await scryptAsync(password, salt, 64);
    return `${buffer.toString('hex')}.${salt.toString('hex')}`;
  }

  static async compare(storedPassword, suppliedPassword) {
    const [hashedPassword, salt] = storedPassword.split('.');
    const buffer = await scryptAsync(suppliedPassword, salt, 64);
    return buffer.toString('hex') === hashedPassword;
  }
}

export default Password;
