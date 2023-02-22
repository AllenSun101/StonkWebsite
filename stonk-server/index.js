const express = require("express");

const PORT = process.env.PORT || 3001

const app = express()

var mysql = require("mysql");

app.get("/api", (req, res) => {
    res.json({message: "Hello, world"});
});


app.get("/database", (req, res) => {
    res.json({message: "Connect to database"});
});

app.get("/blogs", (req, res) => {
    res.json({message: "Retrieve blogs"});
    // Temporary database management since external blog writer is not up yet
    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
      });

});



app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})

