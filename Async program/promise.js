// let myPromise = new Promise(function(resolve, reject){
//     let a = 5
//     let b = 5

//     if(a === b){
//         resolve('Values are equal')
//     }else{
//         reject('Values are not equal')
//     }
// })

// myPromise.then(result => {
//     console.log(result)
// })

// myPromise.catch(err => {
//     console.log(err)
// })
// console.log(myPromise)

function placeOrder(drink){
    return new Promise((resolve, reject) => {
        if(drink === 'coffee'){
            resolve('Order for coffee is received')
        }else{
            reject('Other orders rejected')
        }

    })
}

function processOrder(order){
    return new Promise(resolve => {
        console.log('Order is being processed')
        resolve(`${order} and served`)
    })
}

// placeOrder('coffee').then(orderPlaced => {
//     console.log(orderPlaced)
//     let orderIsProcessed = processOrder(orderPlaced)
//     return orderIsProcessed;
// }).then(processedOrder => {
//     console.log(processedOrder)
// }) // Chaining of promise

async function serveOrder(){
    try {
       let placedOrder = await placeOrder('coffee') 
       console.log(placedOrder)
       let processedOrder = await processOrder(placedOrder)
       console.log(processedOrder)
    } catch (error) {
        console.log(error)
    }
}
serveOrder()