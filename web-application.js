// ESM syntax is supported.
import express from 'express'

const app = express();



// Serving static resources here (all the files under ./public)
app.use(express.static('public'));

// Let Heroku eventually decide which port the application should be listen
const port = process.env.PORT || 3000
// Starting the web server
app.listen(port, () => console.log('Starting web application on port 3000...'));


// Required by ESM (ES6)
export {}

