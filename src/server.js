const express = require("express");
const app = express();

app.use("/", express.static("public"));
app.use("/another", express.static("public/another.html"));
app.use("/moreone", express.static("public/moreone.html"));

// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile("/index.html", { root: __dirname });
// });

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
