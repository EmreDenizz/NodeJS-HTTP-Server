// HTTP Server definitions
const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

// Define request counters
var get_counter = 0;
var post_counter = 0;
var put_counter = 0;
var delete_counter = 0;

// Define products
var products = [];

// GET
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
    res.status(201).send('POST SUCCESSFUL');
    
    // Log request count messages
    log_request_counters();
});

// PUT
app.put('/products/:id', function(req, res) {
    put_counter++;

    // Log messages
    console.log('> products PUT: received request');
    console.log('< products PUT: sending response');

    // Parse product json from the request and update product
    var id = req.params.id;
    var product = req.body;
    for(var i=0; i<products.length; i++){
        if(products[i].productId == id){
            products[i] = product;
        }
    }

    // Return response
    res.status(200).send('PUT SUCCESSFUL');
    
    // Log request count messages
    log_request_counters();
});

// DELETE ONE
app.delete('/products/:id', function(req, res) {
    delete_counter++;

    // Log messages
    console.log('> products DELETE: received request');
    console.log('< products DELETE: sending response');

    // Delete the product
    var id = req.params.id;
    for(var i=0; i<products.length; i++){
        if(products[i].productId == id){
            products.splice(i, 1)
        }
    }

    // Return response
    res.status(204).send();

    // Log request count messages
    log_request_counters();
});

// DELETE ALL
app.delete('/products', function(req, res) {
    delete_counter++;

    // Log messages
    console.log('> products DELETE ALL: received request');
    console.log('< products DELETE ALL: sending response');

    // Delete all products
    products = [];

    // Return response
    res.status(204).send();

    // Log request count messages
    log_request_counters();
});

// Server is listenning
app.listen(port, () => {
    // Log messages to console
    console.log('Server is listening at http://127.0.0.1:' + port);
    console.log('Endpoints:');
    console.log('GET: http://127.0.0.1:5000/products');
    console.log('POST: http://127.0.0.1:5000/products');
    console.log('PUT: http://127.0.0.1:5000/products/:id');
    console.log('DELETE ONE: http://127.0.0.1:5000/products/:id');
    console.log('DELETE ALL: http://127.0.0.1:5000/products');
    console.log('-------------');
})

// Function to log request counts
function log_request_counters(){
    console.log('Processed Request Count--> Get:'+get_counter+', Post:'+post_counter+', Put:'+put_counter+', Delete:'+delete_counter);
    console.log('-------------');
}
