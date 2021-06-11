
/**
 * Run this application with: `npm start --input <VALUE>`. Where <VALUE> is an integer
 */

const INPUT_VALUE = process.argv[2] ?? 7 //Input value (default = 7)

function generateQueue(n) {
  const queue = []

  if(n === 0){
    return null
  }

  while(queue.length <= n){
    queue.push(Math.floor(Math.random() * n) + 1)
  }

  return queue

} 

function throwAwayCards(queue) {
  if(queue === null){
    console.log('Not processed')
    return
  }
  console.log('Original cards stack: ')
  console.table(queue)
  const discardedCards = []
  
  for(let idx = 0; queue.length >= 2 ; idx++){
    discardedCards.push(queue.pop(queue[idx]))
    queue.unshift(queue.pop(queue[queue.length - 1]))
  }
  console.log(`Discarded cards: ${discardedCards}`)
  console.log(`Remaining card: ${queue}`)
}

const queue = generateQueue(parseInt(INPUT_VALUE))

throwAwayCards(queue)