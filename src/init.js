import "regenerator-runtime";

const db = require("./db");
const app = require("./app");

const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
