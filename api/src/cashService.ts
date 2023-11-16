const coins = []

export const insertCoin = (coin: {weightInGrams: number, radiusInInches: number}) => {
    coins.push(coin)
}

export const currentDollarValue = () => {
    let value = 0;
    coins.forEach((coin) => {
        value += .25
    })

    return "$0" + value.toString()

    // if (coinInserted) {
    //     return "$0.25"
    // }
    // return "$0.00"
}