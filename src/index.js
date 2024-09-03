import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connection from "../src/db/connection.db.js"
import{ app} from "./app.js"

connection()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port :${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB connection failed!!", error);
  });