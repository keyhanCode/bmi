const path = require("path");
const express = require("express");

const bmiCalc = require("./utils/bmiCalc");

//set port
const port = process.env.PORT || 3000;

//call express function
const app = express();

//Define path for express config
const publicDirectoyPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

//Setup static directory => this dri will read by borwser
app.use(express.static(publicDirectoyPath));

//Setup handlebar engine and views location
app.set("views", viewsPath);

//Setup template variables for pages
app.get("", (req, res) => {
  res.render("index.hbs", {
    headTitle: "bmi Calculator",
  });
});

app.get("/bmi", (req, res) => {
  // if (!req.query.weight || !req.query.height) {
  //   return res.send({ error: "You must provide age and" });
  // }
  bmiCalc(req.query.weight, req.query.height, (bmi, message) => {
    res.send({
      message: message,
      bmi: bmi,
    });
  });
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
