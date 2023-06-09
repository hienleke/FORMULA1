import mongoose from "mongoose";

const pem = "mongodb+srv://lekehien5431:aZVXXlBptaecTWkC@racing-f1.jphsmk9.mongodb.net/racingf1db"; // DB URI
mongoose.set("strictQuery", false);
async function connectDB() {
     try {
          await mongoose.connect(pem);
          console.log(" connected Mongo : ");
     } catch (e) {
          console.log("could not connect", e);
     }
}

export default connectDB;
