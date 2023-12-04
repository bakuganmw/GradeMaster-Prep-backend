import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
const port = 4000;
const mongoURL = 'mongodb+srv://bakuganmw:masterGrade@mastergrade.qw7o9k0.mongodb.net/?retryWrites=true&w=majority'
const app = express();

import routerSection from './routes/sections.js';
import routerChapter from './routes/chapters.js';
import routerOpenExecises from './routes/openExecises.js';

// middleware
// it gives access to body
app.use(express.json());

app.use(cors())


app.use((req,res,next) => {
	console.log(req.path,req.method);
	next();
})

// routes
app.use('/sections',routerSection);

app.use('/chapters',routerChapter);

app.use('/openExecises',routerOpenExecises);
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

