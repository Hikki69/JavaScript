// const tinderUser = new Object() // singleton object

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Harsh"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "harsh@gmail.com",
    fullname: {
        userfullname: {
            firstname : "harsh",
            lastname: "jha",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


