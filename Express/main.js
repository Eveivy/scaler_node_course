const express = require('express');
const customMiddleware = require('./middlewares/middle')
const customMiddleware2 = require('./middlewares/middle_2')
const morgan = require('morgan')
const app = express(); 

app.use(express.json())

app.use(customMiddleware)
app.use(customMiddleware2)
app.use(morgan('tiny'))

let courses = [
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

app.get('/courses', (req, res) => {    const all = courses.map(el => { 
        const val = ` ${el.id}: ${el.name} `
        return val;
    }) 
    res.send(`${all}`)
})

// Post method: Create
app.post('/courses', (req, res) => {
     const course = {
        id: courses.length + 1,
        name: req.body.name
     }
     courses.push(course)

     res.send(course)

})


// Get method: Read
app.get('/courses/:name', (req, res) => {
    // console.log(req.params)
    let course = courses.find(course => course.name === req.params.name)
     
    if(!course)res.status(404).send('Sorry, cant find that');
    res.send(course.name)
})

// Put method: Update
app.put('/courses/:name', (req, res) => {
    let course = courses.find(course => course.name === req.params.name)
    if(!course)res.status(404).send('Sorry, cant find that');
 
    course.name = req.body.name
    res.send(course)
})

// Delete: by name
// app.delete('/courses/:name', (req, res)=> {
//     let updatedCourses = courses.filter(course => course.name !== req.params.name)

//     courses = updatedCourses
//     res.send(courses)
// })

// Delete: by Id
app.delete('/courses/:id', (req, res) => {
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course)res.status(404).send('Sorry, cant find that');
 
    const idx = courses.indexOf(course)
    courses.splice(idx, 1)

    res.send(course)
})

// specifying localhost port
app.listen(port, () => console.log(`Port is running on ${port }`))

