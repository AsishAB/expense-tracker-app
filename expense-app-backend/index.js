const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 3000;                  //Save the port number where your server will be listening



app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Expense App Running on http://localhost:${port}/`); 
});