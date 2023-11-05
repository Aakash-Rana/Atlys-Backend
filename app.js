const express = require('express');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
//const path= require('path')


const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const postRouter = require('./routes/postRoutes');


const app = express();



//console.log(process.env.NODE_ENV);

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// To compress the text response
app.use(compression());


// Serving static files
app.use(express.static(`${__dirname}/public`));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

// 3) ROUTES
app.use('/api/v1/user', userRouter);
app.use('/api/v1/post', postRouter);

//app.get('/',(req,res)=> res.sendFile(path.join(__dirname,'public/html/login.html')))

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
