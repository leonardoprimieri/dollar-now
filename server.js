const express = require("express");

const server = express();
const router = require("./routes/router");

const nunjucks = require("nunjucks");

server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use(express.json());

server.use(router);

server.set("view engine", "njk");

nunjucks.configure("src/app/views", {
  express: server,
  noCache: true,
});

server.listen(3000, () => {
  console.log(`Server running at 3000!`);
});
