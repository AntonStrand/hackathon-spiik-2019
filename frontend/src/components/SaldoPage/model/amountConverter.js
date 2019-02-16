// ones :: Number -> [Number]
const ones = amount => Array(amount).fill(1)

// sum :: [Number] -> Number
const sum = xs => xs.reduce((acc, n) => acc + n, 0)

// addOnes :: (Number, [Number], Number) -> [Number]
const addOnes = (amount, coins, max = Infinity) => {
  const numOfOnes = amount - sum(coins)
  coins.concat(ones(numOfOnes > max ? max : numOfOnes))
}

const values = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1]

// getCoins :: (Number, ?[Number]) -> [Number]
const getCoins = (amount, change = []) => {
  const coin = values.find(money => money <= amount)
  return amount <= 0 ? change : getCoins(amount - coin, [...change, coin])
}

// prettier-ignore
// convertAmountToMoney :: Number -> [Number]
const convertAmountToMoney = amount =>
  amount <= 15 ? ones(amount)
  : amount <= 20 ? addOnes(amount, [5, 5])
  : amount <= 30 ? addOnes(amount, [10, 5])
  : amount <= 40 ? addOnes(amount, [10, 5, 5, 5])
  : amount <= 50 ? addOnes(amount, [20, 10, 5])
  : amount <= 60 ? addOnes(amount, [20, 10, 10, 5])
  : amount <= 70 ? addOnes(amount, [20, 20, 10, 5])
  : amount <= 80 ? addOnes(amount, [20, 20, 10, 10, 5])
  : amount <= 90 ? addOnes(amount, [20, 20, 20, 10, 5])
  : /* else */ [...addOnes(amount, [20, 20, 20, 10, 5], 15), ...getCoins(amount - 90)]

export default convertAmountToMoney
