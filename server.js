import express from 'express';
import mongoose from 'mongoose';
const port = 4000;
const mongoURL = 'mongodb+srv://bakuganmw:masterGrade@mastergrade.qw7o9k0.mongodb.net/?retryWrites=true&w=majority'
const app = express();

import routerSection from './routes/sections.js';

// middleware
// it gives access to body
app.use(express.json());

app.use((req,res,next) => {
	console.log(req.path,req.method);
	next();
})

// routes
app.use('/sections',routerSection);

// connect to DB
mongoose.connect(mongoURL)
.then(() => {
	app.listen(port, () =>{
		console.log(`connect to db and listening on port ${port}`)
	})
})
.catch((error) => {
    console.log(error);
});

