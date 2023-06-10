import mongoose from "mongoose";
const Fastest_laps = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     year: Number,
     data: [],
});

export const Fastest_LapModel = mongoose.model("fasttest-laps", Fastest_laps);

// User Actions

async function getAll() {
     //  let data = await RaceModel.find({});
     let data = await Fastest_LapModel.find({});
     return data;
}
export const getRacebyYear = (year: number) => Fastest_LapModel.findOne({ year: year });

export { getAll };
