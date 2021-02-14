const express = require("express");
const fs = require('fs');
const unirest = require('unirest');

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
  });

app.get("/api/lastScores", (req, res) =>{
  var scores;
  var test = new Date()
  var timeInSixHour = test.setTime(Date.now() + 21600000);
  fs.readFile('./server/scores.json', 'utf8', (err, data) => {
    if(err){
      console.log(`Error reading file from disk: ${err}`);
    } else {
      scores = JSON.parse(data);
      if(scores.timestamp>Date.now()){
        var today = test.getFullYear()+'-'+test.toLocaleString('en', { month: 'short' }).toUpperCase()+'-'+(test.getDate()-2);
        console.log(today)
        var req=unirest('GET', "https://api.sportsdata.io/v3/nba/scores/json/GamesByDate/"+today);
        req.query({
          "date": "11/02/2021"
        });
        req.headers({
          "Ocp-Apim-Subscription-Key": "79ec85346990475eb682844df269686f"
        });
        req.end(function(response){
          if (response.error) throw new Error(response.error);
          scores= response.body;
          var now = Date.now();
	        var data = JSON.stringify({timestamp:timeInSixHour, data:response.body});
          fs.writeFile('./server/scores.json', data, 'utf8', (err) => {
            if (err) {
              console.log(`Error writing file: ${err}`);
            } else {
              console.log(`File is written successfully!`);
              res.json({scores:scores});
            }
          })
        })
      } else {
        res.json({scores:scores.data});
      }
    }
  });  
});

  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});