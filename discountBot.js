// discount bot
function discountBot (prices) {
    const discountedPrice = prices.map(data=> data - 100)
    console.log(discountedPrice)
}
const prices = [200,300,400,500] 
discountBot(prices)