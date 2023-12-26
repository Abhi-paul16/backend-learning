// require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.log("DB connection error:", err);
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running at port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.log("DB connection error:", err);
//       throw err;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error", error);
//     throw err;
//   }
// })();
