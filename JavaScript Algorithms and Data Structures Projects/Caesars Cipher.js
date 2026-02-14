function rot13(str) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  return [...str].map(letter => {
    if (alphabet.indexOf(letter) > -1) {
    return alphabet.slice(alphabet.indexOf(letter)-13)[0]
    } else {
      return letter
    }
  }).join('')
}

console.log(rot13("SERR CVMMN!"))
