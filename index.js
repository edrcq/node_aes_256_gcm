const { createCipheriv, createDecipheriv } = require('crypto')

exports.encryptUtf8ToHex = function ({ iv, encryptionKey, text }) {
    const cipher = createCipheriv('aes-256-gcm', encryptionKey, iv)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted
}

exports.decryptHexToUtf8 = function ({ iv, encryptionKey, encryptedHex }) {
    const decipher = createDecipheriv('aes-256-gcm', encryptionKey, iv)
    let decrypted = decipher.update(encryptedHex, 'hex', 'utf8')
    //IT BUG ? WHY ? decrypted += decipher.final('utf8')

    return decrypted
}

