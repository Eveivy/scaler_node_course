const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testDB')
.then(() => console.log('Connected successfully'))
.catch(err => console.log("Couldn't connect to mongodb", err))


// Schema
const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: {type: Date, default: Date.now},
    isPublished: Boolean
})
const Course = mongoose.model('Course', courseSchema)

async function createCourse(){
    const course = new Course({
        name: 'Javascript',
        creator: 'Instructor',
        isPublished: true
    })

    const result = await course.save()

    console.log(result)

}

createCourse()