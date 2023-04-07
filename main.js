const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/dummy-json", function (req, res) {
  return res.json({
    name: "John",
    age: 30,
  });
});


app.listen(port, () => {
   console.log(`Example app listening at http://localhost:${port}`)
})
