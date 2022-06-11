import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyparser from 'body-parser'
import compression from 'compression';
import cors from 'cors'
import { connectDb } from './src/helpers/db.helpers'
import { generateRouters } from './src/routes'

const app = express();

app.use(logger('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(compression());
app.use(cors());

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

generateRouters(app);

connectDb();

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.status(err.status || 404).json({
    message: "No such route exists"
  })
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // returns the error page
  res.status(err.status || 500);
  res.send('error');
});

app.listen(5000, () => {
  console.log(`app is listening to port 5000`);
});
