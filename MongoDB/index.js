const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testDB')
.then(() => console.log('Connected successfully'))
.catch(err => console.log("Couldn't connect to mongodb", err))


// Schema
const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    publishedDate: {type: Date, default: Date.now},
    isPublished: Boolean,
    rating: Number
})
const Course = mongoose.model('Course', courseSchema)

// Create course
async function createCourse(){
    const course = new Course({
        name: 'Ruby on Rails',
        creator: 'Instructor',
        isPublished: true,
        rating: 3
    })

    const result = await course.save()

    console.log(result)

}
// createCourse()

// Comparison Operators
/*
eq => equal to
gt => greater than 
gte => greater than or equal to
lt => less than
lte => less than or equal to 
in 
not in
 */

// Logical Operators 
/*
or
and
 */
// Reading courses
async function getCourses(){
    // .select({name: 1})
    const courses = await Course.find({rating: {$in: [3, 4.3]}}).sort({publishedDate: -1})
    .and([{creator: 'Instructor'}, {rating: 4.3}])
    console.log(courses)
}

// getCourses()

// Update course
async function updateCourse(id){
  let course = await Course.findById(id)
  if(!course) return;
  

  course.isPublished = false  

  const updatedCourse = await course.save()

  console.log(updatedCourse)
}

// updateCourse('660af1b99baaf6f0241d29b7')

async function deleteCourse(id){
    const course = await Course.findByIdAndDelete(id)
    console.log(course)
}
deleteCourse('660af17432cbd880a0bdf987')