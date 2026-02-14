function convertToRoman(num) {
  let table = {
      M	:1000,
      CM:	900,
      D	:500,
      CD:	400,
      C	:100,
      XC:	90,
      L	:50,
      XL:	40,
      X	:10,
      IX:	9,
      V	:5,
      IV:	4,
      I	:1
    }

    let str = ''
    let multi
    if (num >= table.M) {
      multi = Math.floor(num/table.M)
      str += [...Array(multi)].map(_ => 'M').join('')
      num -= multi * table.M
    } if (num >= table.CM) {
      multi = Math.floor(num/table.CM)
      str += [...Array(multi)].map(_ => 'CM').join('')
      num -= multi * table.CM
    } if (num >= table.D) {
      multi = Math.floor(num/table.D)
      str += [...Array(multi)].map(_ => 'D').join('')
      num -= multi * table.D
    } if (num >= table.CD) {
      multi = Math.floor(num/table.CD)
      str += [...Array(multi)].map(_ => 'CD').join('')
      num -= multi * table.CD
    } if (num >= table.C) {
      multi = Math.floor(num/table.C)
      str += [...Array(multi)].map(_ => 'C').join('')
      num -= multi * table.C
    } if (num >= table.XC) {
      multi = Math.floor(num/table.XC)
      str += [...Array(multi)].map(_ => 'XC').join('')
      num -= multi * table.XC
    } if (num >= table.L) {
      multi = Math.floor(num/table.L)
      str += [...Array(multi)].map(_ => 'L').join('')
      num -= multi * table.L
    } if (num >= table.XL) {
      multi = Math.floor(num/table.XL)
      str += [...Array(multi)].map(_ => 'XL').join('')
      num -= multi * table.XL
    } if (num >= table.X) {
      multi = Math.floor(num/table.X)
      str += [...Array(multi)].map(_ => 'X').join('')
      num -= multi * table.X
    } if (num >= table.IX) {
      multi = Math.floor(num/table.IX)
      str += [...Array(multi)].map(_ => 'IX').join('')
      num -= multi * table.IX
    } if (num >= table.V) {
      multi = Math.floor(num/table.V)
      str += [...Array(multi)].map(_ => 'V').join('')
      num -= multi * table.V
    } if (num >= table.IV) {
      multi = Math.floor(num/table.IV)
      str += [...Array(multi)].map(_ => 'IV').join('')
      num -= multi * table.IV
    } if (num >= table.I) {
      multi = Math.floor(num/table.I)
      str += [...Array(multi)].map(_ => 'I').join('')
      num -= multi * table.I
    }
      console.log(str)
      return str
}

convertToRoman(3900);
