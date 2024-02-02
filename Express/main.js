const express = require('express');
const app = express(); 

app.use(express.json)

const courses = [
    {id: 1, name: 'JavaScript'},
    {id: 2, name: 'Java'},
    {id: 3, name: 'Python'}
]

app.get('/', (req, res) => {
    res.send('Hello from the other side')
})

app.get('/about', (req, res) => {
    res.send('Hello from the about page')
})

app.get('/contact', (req, res) => {
    res.send('Contact us here')
})

const port = process.env.PORT || 3000

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.post('/courses', (req, res) => {
     const course = {
        id: courses.length + 1,
        name: req.body.name
     }
     courses.push(course)

     res.send(course)

})


// Route Parameters
app.get('/courses/:name', (req, res) => {
    // console.log(req.params)
    let course = courses.find(course => course.name === req.params.name)
    // console.log(course)
    
    if(!course)res.status(404).send('Sorry, cant find that');
    res.send(course.name)
})


// specifying localhost port
app.listen(port, () => console.log(`Port is running on ${port }`))

