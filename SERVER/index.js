import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js';
import bookRoute from './routes/book.route.js';
import cors from 'cors';
//
dotenv.config();
const app = express();
//
const PORT = 5000 || process.env.PORT;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Middlewares for handling CORS policy
// 1--Option Allow All Origin with default of cors(*)
app.use(cors());
// 2-Allow custom origins
// app.use(
//   cors({
//     origin: 'http:localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type'],
//   })
// );
// route
app.get('/', (req, res) => {
  req.send('this is from first route');
});
// route
app.use('/api/books', bookRoute);

app.listen(PORT, () => {
  console.log(`this is from server: ${PORT}`);
  connectMongoDB();
});
