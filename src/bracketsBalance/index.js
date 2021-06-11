
/**
 * Run this application with: `npm start`
 */

const bracketList = [
  "a+(b*c)-2-a",
  "(a+b*(2-c)-2+a)*2",
  "(a*b-(2+c)",
  "2*(3-a))",
  ")3+b*(2-c)(",
  ") - 1232 ()23(#&¨#$¨%!@¨&(()(---=1324123)))"
]

function bracketsBalance(bracketList) {
  const open = "(";
  const close = ")";
  
  for (const sentence of bracketList) {
    
    let countOpened = 0
    let countClosed = 0
    let isForbidden = false
    for (const char of sentence) {

      if (char === open) {
        countOpened++
      }

      if (char === close) {
        countClosed++
        if (countOpened === 0) {
          isForbidden = true
        }
      }

    }

    if (countOpened === countClosed && isForbidden === false) {
      console.log(`${sentence} - Está correto`)
    } else {
      console.log(`${sentence} - Está incorreto`)
    }
  }
}

bracketsBalance(bracketList)