const allowChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const shiftCipher = rot => allowChars.substr(rot, allowChars.length) + allowChars.substr(0, rot)

export function decrypt(encryptedMessage, rot = 13) {
  const shiftedCipher = shiftCipher(rot)

  return encryptedMessage
    .split('')
    .reduce((result, char) => {
      const indexOfFoundedChar = shiftedCipher.indexOf(char.toUpperCase())
      const item = indexOfFoundedChar === -1 ? char : allowChars[indexOfFoundedChar]

      return result.concat(item)
    }, [])
    .join('')
}
