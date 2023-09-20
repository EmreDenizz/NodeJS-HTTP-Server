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

    // var result = '';
    // for(var i=0; i<products.length; i++){
    //     result += JSON.stringify(products[i]) + '\n';
    // }
    // res.send(result);

    // Return products as response
    res.send(products);

    // Log request count messages
    log_request_counters();
})

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
