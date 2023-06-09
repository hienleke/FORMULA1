import mongoose from "mongoose";
const Fastest_laps = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     year: Number,
     data: [],
});

export const Fastest_LapModel = mongoose.model("fasttest-laps", Fastest_laps);

// User Actions

async function getAll() {
     console.log(" run hereh fastes");
     //  let data = await RaceModel.find({});
     let data = await Fastest_LapModel.find({});
     return data;
}
export const getRacebyYear = (year: number) => Fastest_LapModel.findOne({ year: year });
// export const getUserBySessionToken = (sessionToken: string) => RaceModel.findOne({ "authentication.sessionToken": sessionToken });
// export const getUserById = (id: string) => RaceModel.findById(id);
// export const createUser = (values: Record<string, any>) => new RaceModel(values).save().then((user) => user.toObject());

export { getAll };
