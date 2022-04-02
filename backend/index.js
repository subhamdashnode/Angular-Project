const express=require('express');
const connectToMongoose=require('./db');
const cors=require('cors');
connectToMongoose();
const app=express();
var port = process.env.PORT || 3000;

// middleware 
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/authentication',require('./routes/auth/auth'));

app.listen(port, () => console.log(`My server is listening on port ${port}`));