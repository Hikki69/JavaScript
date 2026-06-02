// destructuring of objects

const course = {
    coursename: "javascript",
    price : "free",
    courseInstructor: "harsh"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: instructor} = course
console.log(instructor);

// JSON
// {
//     "name":"harsh",
//     "coursename":"javascript",
//     "price":"free"
// }