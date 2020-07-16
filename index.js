const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database/index.js");
const path = require("path");
const routes = require("./routes");
const port = process.env.PORT || 3000;
// require("dotenv").config();
const app = express();
app.use(express.static(path.join(__dirname, "/../client/dist")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/test", routes.testRoutes);
app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
