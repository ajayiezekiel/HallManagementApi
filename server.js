const express = require('express');
const dotenv = require('dotenv');


// routes files
const halls = require('./routes/halls');
const bookings = require('./routes/bookings');

// Load env vars
dotenv.config({ path: './config/config.env'});


app = express();

// Mount routers
app.use('/api/v1/halls', halls);
// app.use('/api/v1/bookings', bookings);

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log(`Server is in ${process.env.NODE_ENV} listening on port ${PORT}!`);
});