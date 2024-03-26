function customMiddleware2(req, res, next){
    console.log('I am the second middleware')
    next()
}

module.exports = customMiddleware2;