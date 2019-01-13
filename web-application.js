// ESM syntax is supported.
import express from 'express'

const app = express();



// Serving static resources here (all the files under ./public)
app.use(express.static('public'));

// Starting the web server
app.listen(3000, () => console.log('Starting web application on port 3000...'));


// Required by ESM (ES6)
export {}

