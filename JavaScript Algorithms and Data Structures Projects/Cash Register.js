function checkCashRegister(price, cash, cid) {
  let table = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100
  }
  const CID = [...cid].map(cur => [...cur])
  let output = []
  let change = cash - price
  let required
  if (change >= table['ONE HUNDRED']) {
    required = Math.floor(change / table['ONE HUNDRED']) * table['ONE HUNDRED']
    if (cid[cid.length - 1][1] >= required) {
      cid[cid.length - 1][1] -= required
      change -= required
      output.push([cid[cid.length - 1][0], required])
    } else {
      output.push([cid[cid.length - 1][0], cid[cid.length - 1][1]])
      change -= cid[cid.length - 1][1]
      cid[cid.length - 1][1] = 0
    }
  } if (change >= table.TWENTY) {
    required = Math.floor(change / table.TWENTY) * table.TWENTY
    if (cid[cid.length - 2][1] >= required) {
      cid[cid.length - 2][1] -= required
      change -= required
      output.push([cid[cid.length - 2][0], required])
    } else {
      output.push([cid[cid.length - 2][0], cid[cid.length - 2][1]])
      change -= cid[cid.length - 2][1]
      cid[cid.length - 2][1] = 0
    }
  } if (change >= table.TEN) {
    required = Math.floor(change / table.TEN) * table.TEN
    if (cid[cid.length - 3][1] >= required) {
      cid[cid.length - 3][1] -= required
      change -= required
      output.push([cid[cid.length - 3][0], required])
    } else {
      output.push([cid[cid.length - 3][0], cid[cid.length - 3][1]])
      change -= cid[cid.length - 3][1]
      cid[cid.length - 3][1] = 0
    }
  } if (change >= table.FIVE) {
    required = Math.floor(change / table.FIVE) * table.FIVE
    if (cid[cid.length - 4][1] >= required) {
      cid[cid.length - 4][1] -= required
      change -= required
      output.push([cid[cid.length - 4][0], required])
    } else {
      output.push([cid[cid.length - 4][0], cid[cid.length - 4][1]])
      change -= cid[cid.length - 4][1]
      cid[cid.length - 4][1] = 0
    }
  } if (change >= table.ONE) {
    required = Math.floor(change / table.ONE) * table.ONE
    if (cid[cid.length - 5][1] >= required) {
      cid[cid.length - 5][1] -= required
      change -= required
      output.push([cid[cid.length - 5][0], required])
    } else {
      output.push([cid[cid.length - 5][0], cid[cid.length - 5][1]])
      change -= cid[cid.length - 5][1]
      cid[cid.length - 5][1] = 0
    }
  } if (change >= table.QUARTER) {
    required = (Math.floor(change / table.QUARTER) * table.QUARTER).toFixed(2)
    if (cid[cid.length - 6][1] >= required) {
      cid[cid.length - 6][1] = parseFloat((cid[cid.length - 6][1] - required).toFixed(2))
      change = (change - required).toFixed(2)
      output.push([cid[cid.length - 6][0], parseFloat(required)])
    } else {
      output.push([cid[cid.length - 6][0], cid[cid.length - 6][1]])
      change = (change - cid[cid.length - 6][1]).toFixed(2)
      cid[cid.length - 6][1] = 0
    }
  } if (change >= table.DIME) {
    required = (Math.floor(change / table.DIME) * table.DIME).toFixed(2)
    if (cid[cid.length - 7][1] >= required) {
      cid[cid.length - 7][1] = parseFloat((cid[cid.length - 7][1] - required).toFixed(2))
      change = (change - required).toFixed(2)
      output.push([cid[cid.length - 7][0], parseFloat(required)])
    } else {
      output.push([cid[cid.length - 7][0], cid[cid.length - 7][1]])
      change = (change - cid[cid.length - 7][1]).toFixed(2)
      cid[cid.length - 7][1] = 0
    }
  } if (change >= table.NICKEL) {
    required = (Math.floor(change / table.NICKEL) * table.NICKEL).toFixed(2)
    if (cid[cid.length - 8][1] >= required) {
      cid[cid.length - 8][1] = parseFloat((cid[cid.length - 8][1] - required).toFixed(2))
      change = (change - required).toFixed(2)
      output.push([cid[cid.length - 8][0], parseFloat(required)])
    } else {
      output.push([cid[cid.length - 8][0], cid[cid.length - 8][1]])
      change = (change - cid[cid.length - 8][1]).toFixed(2)
      cid[cid.length - 8][1] = 0
    }
  } if (change >= table.PENNY) {
    required = (Math.floor(change / table.PENNY) * table.PENNY).toFixed(2)
    if (cid[cid.length - 9][1] >= required) {
      cid[cid.length - 9][1] = parseFloat((cid[cid.length - 9][1] - required).toFixed(2))
      change = (change - required).toFixed(2)
      output.push([cid[cid.length - 9][0], parseFloat(required)])
    } else {
      output.push([cid[cid.length - 9][0], cid[cid.length - 9][1]])
      change = (change - cid[cid.length - 9][1]).toFixed(2)
      cid[cid.length - 9][1] = 0
    }
  }
  if (change == 0) {
    if (cid.every(cur => {
      return cur[1] == 0?true:false
    })) {
      return {status: 'CLOSED', change: CID}
    } else {
      return {status: 'OPEN', change: output}
    }
  } else {
    return {status: 'INSUFFICIENT_FUNDS', change: []}
  }
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
// checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
