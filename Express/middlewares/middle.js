function customMiddleware(req, res, next){
    console.log('I am a custom middleware')
    next()
}

module.exports= customMiddleware;