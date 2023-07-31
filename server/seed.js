const mongoose = require("mongoose")
require("dotenv").config()
mongoose.connect(process.env.DATABASE_URL)

const Cat = require("./models/cat")

async function seed(){
    await Cat.create({
        name: "Chicken",
        color: "grey",
        hasClaws: true,
        likes: ["Cheap cat food", "Blackbirds", "LARPing as a human"]
    })
    await Cat.create({
        name: "Sausage",
        color: "ginger",
        hasClaws: false,
        likes: ["Eating", "Headbutting hands", "Running away from home :("]
    })

    console.log("RIP Shadow, dribble on in kitty heaven <3")
    mongoose.disconnect()
}

seed()