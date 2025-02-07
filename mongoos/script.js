const mongoose = require('mongoose')

const User = require('./user')
const Activity = require('./login')
const Profile =require('./profile')



mongoose.connect("mongodb://localhost/testdb")
async function run() {
    const user = new User({
        username : 'Joecelaster',
        email : 'joe3036@gmial.com',
        password: 'joe123',
        roles: ['web dev','manager']
    })
    const profile = new Profile(
        {
            firstName: "Joe",
            lastName: 'Celaster',
            age: 18
        }
    )
    const login = new Activity(
        {
            lastlogin : Date.now()
        }
    )
    await user.save()
    await profile.save()
    await login.save()
    console.log(user)
    console.log(profile)
    console.log(login)
    mongoose.connection.close()
}
run()










// const mongoose = require("mongoose")

// const User = require('./user')

// mongoose.connect("mongodb://localhost/testdb")
// run()
// async function run() {
//     const user = new User({name: 'joe',age: 18, hobbies: ['code','music']})
//     await user.save()
//     console.log(user)
// }