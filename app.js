// HTTP Server definitions
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Define request counters
var get_counter = 0;
var post_counter = 0;
var delete_counter = 0;

// Define products
var products = [];

// GET method
app.get('/products', function(req, res) {
    get_counter++;

    // Log messages
    console.log('> products GET: received request');
    console.log('< products GET: sending response');

    // Return response
    res.send(products);

    // Log request count messages
    log_request_counters();
})

// POST
app.post('/products', function(req, res) {
    post_counter++;

    // Log messages
    console.log('> products POST: received request');
    console.log('< products POST: sending response');

    // Parse product json from the request and push to stored products
    var product = req.body;
    products.push(product);

    // Return response
    res.status(201).send('SUCCESSFUL');
    
    // Log request count messages
    log_request_counters();
});

// DELETE
app.delete('/products', function(req, res) {
    delete_counter++;

    // Log messages
    console.log('> products DELETE: received request');
    console.log('< products DELETE: sending response');

    // Delete all products
    products = [];

    // Return response
    res.status(204).send('SUCCESSFUL');

    // Log request count messages
    log_request_counters();
});

// Server is listenning
app.listen(port, () => {
    // Log messages
    console.log('Server is listening at http://127.0.0.1:' + port);
    console.log('Endpoints:');
    console.log('GET: http://127.0.0.1:5000/products');
    console.log('POST: http://127.0.0.1:5000/products');
    console.log('DELETE: http://127.0.0.1:5000/products');
    console.log('-------------');
})

// Function to log request counts
function log_request_counters(){
    console.log('Processed Request Count--> Get:'+get_counter+', Post:'+post_counter+', Delete:'+delete_counter);
    console.log('-------------');
}
