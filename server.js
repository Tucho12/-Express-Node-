const express = require('express');

const app = express();
const userRoutes = require('./routes/userRoutes');
const isAuthenticated = require('./middleware/auth');


app.get('/', (req, res) =>{
 res.send('Hello, Wel come to my app!');
});
app.use('/user', isAuthenticated, userRoutes);

app.listen(5000,() => {
console.log(`Server is running on http://localhost:5000`);
});