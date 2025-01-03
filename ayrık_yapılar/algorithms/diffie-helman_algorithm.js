// Import utilities if needed (placeholder)
import * as text_parser from '../util/text_parser.js';

// Result object to store steps and keys
let steps_text = [];
let crypted_text = [];
let decrypted_text = [];
let keys = [];

// Result object
let object = {
  steps: steps_text,
  crypted_text: crypted_text,
  keys: keys,
  decrypted_text: decrypted_text,
};

// Modüler üs alma fonksiyonu
function modularExponentiation(base, exponent, modulus) {
  let result = 1n;
  base = BigInt(base) % BigInt(modulus);

  while (exponent > 0n) {
    if (exponent % 2n === 1n) {
      result = (result * base) % BigInt(modulus);
    }
    exponent = exponent / 2n;
    base = (base * base) % BigInt(modulus);
  }

  return result;
}

// Diffie-Hellman genel fonksiyonu
export function calculateDH(prime, generator, privateKey, operation, publicKey = null, message = null) {
  if (!prime || !generator || !privateKey) {
    throw new Error('Prime, generator ve privateKey zorunludur.');
  }

  // Object sıfırlama
  object.steps = [];
  object.crypted_text = [];
  object.keys = [];
  object.decrypted_text = [];

  if (operation === "encrypt") {
    if (!message) throw new Error('Şifreleme için mesaj gereklidir.');

    // Public key hesaplama
    const publicKeyCalculated = modularExponentiation(generator, privateKey, prime);
    object.keys.push(`Açık Anahtar (Public Key): ${publicKeyCalculated}`);
    object.steps.push(`1- Prime (p): ${prime}`);
    object.steps.push(`2- Generator (g): ${generator}`);
    object.steps.push(`3- Private Key (a): ${privateKey}`);
    object.steps.push(`4- Public Key (A): ${publicKeyCalculated}`);

    // Mesajı şifreleme
    const letters = text_parser.textParser(message);
    for (let i = 0; i < letters.length; i++) {
      const encryptedChar = Number(modularExponentiation(letters[i], publicKeyCalculated, prime));
      object.crypted_text.push(encryptedChar);
      object.steps.push(`5- Encrypting character '${letters[i]}': ${encryptedChar}`);
    }
  }

  if (operation === "decrypt") {
    if (!publicKey || !message) throw new Error('Çözme için publicKey ve şifreli mesaj gereklidir.');

    // Shared secret (paylaşılan anahtar) hesaplama
    const sharedSecret = modularExponentiation(publicKey, privateKey, prime);
    object.steps.push(`1- Shared Secret (s): ${sharedSecret}`);

    // Şifreli mesajı çözme
    const encryptedMessage = message.split(",").map(Number);
    for (let i = 0; i < encryptedMessage.length; i++) {
      const decryptedChar = modularExponentiation(encryptedMessage[i], sharedSecret, prime);
      object.decrypted_text.push(decryptedChar);
      object.steps.push(`2- Decrypting character '${encryptedMessage[i]}': ${decryptedChar}`);
    }
  }

  console.log("Prime:", prime);
  console.log("Generator:", generator);
  console.log("Private Key:", privateKey);
  if (operation === "encrypt") console.log("Message:", message);
  if (operation === "decrypt") console.log("Public Key:", publicKey);

  // Return the steps, keys, and crypted/decrypted texts
  return object;
}
