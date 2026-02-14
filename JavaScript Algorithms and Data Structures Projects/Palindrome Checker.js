function palindrome(str) {
  str = str.toLowerCase()
  str = str.replace(/[^a-z0-9]+/ig, '')
  console.log(str)
  let newStr = [...Array(str.length)].map((_, index) => str[str.length - index - 1]).join('')
  return str == newStr
}

palindrome("A man, a plan, a canal. Panama");
