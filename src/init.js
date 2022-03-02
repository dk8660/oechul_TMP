import "regenerator-runtime";

const db = require("./db");
const app = require("./app");

const PORT = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});

// heroku test
