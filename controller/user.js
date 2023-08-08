const User = require('../model/User');

//create user
const createUser = async (req, res) => {
       try {
              const user = req.body;
              const employee_id = req.body.employee_id;

              if (!employee_id) {
                     res.status(400);
                     throw new Error("employee_id field is mandatory");
              }

              const newUser = await User.create(user);

              res.status(200).json({
                     success: true,
                     data: newUser
              })


       } catch (error) {
              throw error.message;
       }
}

//get user 
const getUser = async (req, res) => {
       try {
              //const employee_id = req.params.body;
              const user = await User.findById(req.params.id);
              if (!user) {
                     res.status(404);
                     throw new Error("User not found");
              }
              res.status(200).json({
                     success: true,
                     data: user
              })
       } catch (error) {
              throw error.message
       }
}

//update user

const updateUser = async (req, res) => {
       try {
              // const employee_id = req.params.body;
              const user = await User.findById(req.params.id);
              if (!user) {
                     res.status(404)
                     throw new Error("User not found");
              }
              //const userData = req.body;
              const newuser = await User.findByIdAndUpdate(req.params.id,
                     req.body,
                     { new: true }
              );


              res.status(201).json({
                     success: true,
                     data: newuser
              })

       } catch (error) {
              throw error.message;
       }
}

//delete user

const deleteUser = async (req, res) => {
       try {
              //const employee_id = req.params.body;
              const user = await User.findById(req.params.id);
              if (!user) {
                     res.status(404);
                     throw new Error("User not found");
              }

              const newuser = await User.deleteOne({ _id: req.params.id })

              res.status(200).json({
                     success: true,
                     data: []
              })
       } catch (error) {
              throw error.message
       }
}

module.exports = {
       createUser,
       getUser,
       updateUser,
       deleteUser
}