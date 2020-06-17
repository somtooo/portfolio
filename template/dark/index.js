const express = require("express");
const path = require("path");
const app = express();

app.set('views',path.join(__dirname,'/views'))
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/assets"));
const port = process.env.PORT || 3000
app.get("/", function(req, res) {
    res.render("slider3.ejs");
});

app.get("/project1", function(req, res) {
    res.render("project-1.ejs");
});

app.get("/project9", function(req, res) {
    res.render("project-9.ejs");
});

app.get("/project8", function(req, res) {
    res.render("project-8.ejs");
});

app.get("/about", function(req, res) {
    res.render("about.ejs");
});

app.get("/sitemap.xml", function (req,res) {
    res.sendFile(path.join(__dirname,'/views/sitemap.xml'))

})



app.listen(port, () => {
    console.log(`Server is up on port ${port}!`)
})