import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://dk8660:sajo77@cluster0.7yxje.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log("DB Error", error);
db.on("error", handleError);
db.once("open", handleOpen);
