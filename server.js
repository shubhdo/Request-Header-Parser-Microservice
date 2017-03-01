var express=require("express");
var locale=require("locale");
var os=require("os");
var app=express();
var supported = ["en", "en_US", "ja"]
app.use(locale(supported));
app.get('/',function(req,res) {
   res.json({
      "paddress":req.connection.remoteAddress,
      "language":req.locale,
      "software":os.platform()

   }); 
});
var port = process.env.PORT ;

app.listen(port, function(){
  console.log("Listening on port: " + port);
});