import mongoose from "mongoose";
const Race = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     year: Number,
     data: [],
});

export const RaceModel = mongoose.model("races", Race);

// User Actions

async function getAll() {
     let data = await RaceModel.find({});
     return data;
}
export const getRacebyYear = (year: number) => RaceModel.findOne({ year: year });

export { getAll };
