//creating untangible variables 
// importing libraries 
const express = require('express');
const bodyParser = require('body-parser'); 

const app = express (); 
const PORT = 8080 

//This parses POST data 
//It acts like a translator from url encoded to text, extended meaning we can cet complex text

app.use(bodyParser.urlencoded({ extended: true }));

//linking to html file because express does not normally serve html 
//dirname is a vs code variable that means serve html file which is in the same folder as server.js
app.use(express.static(__dirname));

// Endpoint to receive user data from script.js
app.post('/submit-name', (req, res) => {
    const name = req.body.username;      // grab "username" field from POST
    console.log("User entered:", name);  // prints it in CMD
    res.send("Hi " + name + "! Your name was received."); // optional response for user
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

//no other event listener is needed because submit name is 
// launched by my HTML on click button 