var express = require('express');
var moment = require('moment');
var app = express();

/*I can pass a string as a parameter,
and it will check to see whether that string 
contains either a unix timestamp or a natural 
language date (example: January 1, 2016)
*/
app.get("/",function(req,res){
  
  res.end( "<h1>API Basejump: Timestamp microservice</h1><p>For more information visit this link <a href='https://timestamp-ms.herokuapp.com/'>link</a></P>");
  
  
})
app.get('/:namet', function (req, res) {
  var stringa = req.params.namet;
  if(!(isNaN(stringa))){
    var controlla = moment.unix(req.params.namet);
    if(controlla.isValid()){
    var dateString = moment.unix(req.params.namet).format("MMMM D, YYYY");
    var oggetto = {"unix":req.params.namet,"natural":dateString};
      res.send(oggetto);
}
else{
  var oggetto = {"unix":null,"natural":null};
  res.send(oggetto);
}
  }
  else{
    var controlla = moment(req.params.namet);
    if(controlla.isValid()){
    var dateString = (new Date(req.params.namet).getTime())/1000;
    var oggetto ={"unix":dateString,"natural":req.params.namet};
    res.send(oggetto);
  }
  else{
    var oggetto = {"unix":null,"natural":null};
  res.send(oggetto);
  }
  }
  
});

app.listen(8080, function () {
  console.log('Example app listening on port 3000!');
});

