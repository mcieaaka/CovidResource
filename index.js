const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      Resource = require('./models/resource'),
      app = express();

// mongoose.connect("mongodb://localhost/resource",{useNewUrlParser:true, useUnifiedTopology:true});
mongoose.connect("mongodb+srv://Harshit:NYTBPYzveXMZjE2N@covidres.iwp5t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

app.get("/",async(req,res)=>{
    res.render('home');
});

app.get("/addresource",async(req,res)=>{
    res.render("addr");
})
app.post("/addresource",async(req,res)=>{
    var reso = req.body;
    var resfinal =await Resource.create(reso,(err,r)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    })
})

app.get("/view",async(req,res)=>{
    var reso = await Resource.find({});
    res.render("view",{reso});
})

app.post("/pinsearch",async(req,res)=>{
    var ser = req.body.pin;
    var f = await Resource.find({pin:ser});
    res.render("pinsearch",{f});
})

var PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Started");
})