const express = require('express');

const userRoutes = express.Router();

userRoutes.route('/').get((req, res) => {
  res.json({
    status: 'success',
    message: 'Welcome to the User API',
  })
});
 
userRoutes.route('/:id').get( (req, res) => {
  const userId = req.params.id;
  res.json({
    status: 'success',
    message: `User ID is ${userId}`,
  })
})
.put( (req, res) => {
  const userId = req.params.id;
  res.json({
    status: 'success',
    message: `User ID ${userId} updated successfully`,
  })
})
.delete( (req, res) => {
  const userId = req.params.id;
  res.json({
    status: 'success',
    message: `User ID ${userId} deleted successfully`,
  })
})


module.exports = userRoutes;