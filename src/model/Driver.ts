import mongoose from "mongoose";
const Driver = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     year: Number,
     data: [],
});

export const DriverModel = mongoose.model("drivers", Driver);

// User Actions

async function getAll() {
     //  let data = await RaceModel.find({});
     let data = await DriverModel.find({});
     return data;
}
export const getRacebyYear = (year: number) => DriverModel.findOne({ year: year });

export { getAll };
