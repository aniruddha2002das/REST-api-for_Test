const express = require('express');
const connectDB = require('./db/connection');
const menRanking = require('./models/mensSchema');
const router = require('./routers/mensRouter');

const port = process.env.PORT || 8050;
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/olympic';

const app = express();
app.use(express.json());
app.use(router);

// Connection with database.
connectDB(DATABASE_URL);

app.listen(port,() => {
    console.log(`Connection successful with ${port}`);
});