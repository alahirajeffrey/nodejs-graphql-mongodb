const mongoose = require('mongoose')

const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log(`connected to mongodb connected`.cyan.underline.bold)
        }).catch((err)=>{
            console.log(err)
        })  
}

module.exports = { connectDB } 