const mongoose = require('mongoose');

module.exports = connectDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false,
        })
        console.log('Database connected successfully')
    } catch (error) {
        console.error(error)
    }
}