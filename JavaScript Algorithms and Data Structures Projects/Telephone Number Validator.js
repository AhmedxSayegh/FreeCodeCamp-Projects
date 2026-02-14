function telephoneCheck(str) {
  let tests = []
  tests.push((number) => {
    let numberLength = (number.match(/\d/g) || []).length
    let plainNumber = number.replace(/[ ()-]/g, '')
    if ((numberLength == 10 || numberLength == 11) && numberLength == plainNumber.length) {
      return true
    }
    return false
  })

  tests.push((number) => {
    number = number.replace(/[ -]/g, '')
    if ((number.match(/[()]/g) || []).length == 2 || (number.match(/[()]/g) || []).length == 0) {
    if (number.includes('(') && number.includes(')')) {
      if (number.indexOf(')') - number.indexOf('(') == 4 && (number.match(/\d/g) || []).length - number.indexOf('(') == 10) {
          return true
      } else {
        return false
      }
    } return true}
    return false
  }
  )

  tests.push((number) => {
    if (number.replace(/[ ()-]/g, '').length == 11) {
      let countryCode = number.split(/[ ()]/)[0]
      return countryCode == '1'? true:false
    } else if (number.match(/[ (]/) && number.match(/[ (]/).index) {
      return number.split(/[ (]/)[0] == '1'?true:false
    } return true
  })

  return (tests.every(test => test(str)))

}
