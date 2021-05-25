const express = require('express')
require('dotenv').config({ path: './config/.env' })
const connectDB = require('./config/connectDB')

//model user
const User = require('./models/User')

const app = express();

//middleware
app.use(express.json())


//create CRUD : create , read , update , delete
// post , put, delete , get 

//add user to the database 
app.post('/users/add', async (req, res) => {
    const { name, password , email, phone } = req.body;
    const newUser = new User({ name, password , email, phone })
    //new User = new module ({param1,param2,...})
    try {
        //save user =>base
        let user = await newUser.save()
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});


//get all users from the database
app.get('/users/get', async (req, res) => {
    try {
        let users = await User.find();
        res.send(users);
    } catch (error) {
        res.send(error)
    }
})

//get single user 
app.get('/users/get/:userID', async (req, res) => {
    try {
        let user = await User.findById(req.params.userID)
        res.send(user);
    } catch (error) {
        res.send(error);
    }
})

//edit a user
app.put('/users/edit/:userID', async (req, res) => {
    try {
        let editedUser = await User.findByIdAndUpdate(req.params.userID, { ...req.body }, { new: true })
        res.send(editedUser)
    } catch (error) {
        res.send(error)
    }
})

//delete a user
app.delete('/users/delete/:userID', async (req, res) => {
    try {
        await User.findOneAndDelete(req.params.userID);
        res.send({ msg: 'User successfuly deleted' });
    } catch (error) {
        res.send(error);
    }
});
//connecte  base
connectDB();

const PORT = process.env.PORT || 8000

app.listen(PORT, (err) =>
    err ? console.error(err) : console.log(`Server is runnig on port ${PORT}`)
);
