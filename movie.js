const express = require('express');
const bodyParser= require('body-parser');
var fs = require('fs');
const app = express();
app.use(bodyParser.urlencoded(
    {extended:true}));
    const movie =[
    {no:1,MovieName:"ABCD",price:60}, 
    {no:2,MovieName:"XYZ",price:70},
    {no:3,MovieName:"AAA",price:50}
    ];
    app.get('/',function(req,res){
    if (req.url == "/") {
       // res.send("Welcome");
        res.sendFile(__dirname+"/"+"input.html");
        }});
   app.get('/home',function(req,res){
    res.send(movie);
     });
   
   app.post('/insert',function(req,res){
        const movies = [
            {no:movie.length+1},
            {MovieName:req.body.MovieName},
            {price:req.body.price}
         ]
       movie.push(movies);
       res.send(movie);
  });
  /*const movies=" ";
  app.get('/:no',function(req,res){
       movies= movie.find(function(m){
            m.no == parseInt(req.params.no);
             if(!movies){
                 res.send(404);
             }
             else{
                 res.send(movies);
             }
       });
  });
  app.post('/delete',function(req,res){
        const nos= req.body.no1;
         console.log('Deleting',nos);
         delete movie[nos];
         res.send(movie);
  }); */
app.listen(5000);
console.log("server running at 5000");
