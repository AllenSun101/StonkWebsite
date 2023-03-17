const express = require("express");

const PORT = process.env.PORT || 3001

const app = express()

var mysql = require("mysql2");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


app.get("/api", (req, res) => {
    res.json({message: "Hello, world"});
});


app.get("/database", (req, res) => {
    res.json({message: "Connect to database"});
});


app.post("/blogs", (req, res) => {
    // Temporary database management since external blog writer is not up yet
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Isaac-Andy1",
        database: "blogposts"
      });
    
    var numPosts = req.body.numPosts;
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        console.log(req.body.search);
        var searchTerms = req.body.search;

        // Render most recent posts
        var sql = "SELECT * FROM blogposts ORDER BY idBlogPosts DESC LIMIT " + con.escape(numPosts);

        // If search bar is not empty, search
        if(searchTerms != ""){
          sql = SearchPosts(req.body.search, numPosts);
        }

        //var sql = "INSERT INTO blogposts (Title, Author, Date, BlogText) VALUES ('Title', 'Allen', '2023-03-12', 'Text')";

        con.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
      });

});


function SearchPosts(terms, numPosts){
    var indices = [];
    var words = terms.split(" ");
    var sql = "SELECT * FROM blogposts WHERE idBlogPosts = 61";

    // Get results until numPosts is found
    // Priority- find in title
    sql = "SELECT * FROM blogposts WHERE Title LIKE '%" + terms + "%'";

    // Priority- find entire sentence
    sql = "SELECT * FROM blogposts WHERE BlogText LIKE '%" + terms + "%'";

    // Second Priority- find words with heigher weight or importance
  

    return sql;
}

app.post("/DailyUpdates", (req, res) => {
   // Temporary database management since external blog writer is not up yet
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Isaac-Andy1",
        database: "blogposts"
      });
    
    var numPosts = req.body.numPosts;
      
      con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        console.log(req.body.search);
        var searchTerms = req.body.search;

        // Render most recent posts
        var sql = "SELECT * FROM blogposts ORDER BY idBlogPosts DESC LIMIT " + con.escape(numPosts);

        // If search bar is not empty, search
        if(searchTerms != ""){
          sql = SearchPosts(req.body.search, numPosts);
        }

        //var sql = "INSERT INTO blogposts (Title, Author, Date, BlogText) VALUES ('Title', 'Allen', '2023-03-12', 'Text')";

        con.query(sql, function (err, result) {
            if (err) throw err;
            res.json(result);
        });
      });
})

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
})

