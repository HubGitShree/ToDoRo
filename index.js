//jshint esversion:6

//setting up my server
const express= require("express");
const bodyParser= require("body-parser");


const app=express();
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var items=[];

app.get("/", (req,res)=>{
  // res.send("Hello");
var today= new Date();

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var day=today.toLocaleDateString("en-US",options);

res.render("list.ejs", {kindOfDay: day, newItems: items});

});

app.post("/", function(req, res){
   var item=req.body.newEntry;
   items.push(item);

  res.redirect("/");                                                             //redirect to home route
})

app.listen(3000, ()=>{
  console.log("server is up and running");
});
