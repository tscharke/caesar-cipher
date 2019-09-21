import { decrypt } from './index'

describe('Caesar Cipher', () => {
  describe('Decrypt', () => {
    test('decrypt', () => {
      const encryptedMessage = 'NOPQRSTUVWXYZABCDEFGHIJKLM'

      const decryptedMessage = decrypt(encryptedMessage)

      expect(decryptedMessage).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
      expect(decryptedMessage).toHaveLength(encryptedMessage.length)
    })

    test('decrypt given message', () => {
      const encryptedMessage = 'qevax zber binygvar, pbatenghyngvbaf lbh trg gb frg gur arkg punyyratr'

      const decryptedMessage = decrypt(encryptedMessage)

      expect(decryptedMessage).toEqual('DRINK MORE OVALTINE, CONGRATULATIONS YOU GET TO SET THE NEXT CHALLENGE')
    })

    test('decrypt with numbers', () => {
      const encryptedMessage = 'zber 42'

      const decryptedMessage = decrypt(encryptedMessage)

      expect(decryptedMessage).toEqual('MORE 42')
    })

    test('decrypt handle other characters', () => {
      const encryptedMessage = 'zber 🦄🎉🙏'

      const decryptedMessage = decrypt(encryptedMessage)

      expect(decryptedMessage).toEqual('MORE 🦄🎉🙏')
    })

    test('decrypt with variable key', () => {
      const encryptedMessage = 'UVWXYZABCDEFGHIJKLMNOPQRST'

      const decryptedMessage = decrypt(encryptedMessage, 20)

      expect(decryptedMessage).toEqual('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
    })
  })
})
