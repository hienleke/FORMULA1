import mongoose from "mongoose";
const Race = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     year: Number,
     data: [],
});

export const RaceModel = mongoose.model("races", Race);

// User Actions

async function getAll() {
     console.log(" run hereh");
     //  let data = await RaceModel.find({});
     let data = await RaceModel.find({});
     return data;
}
export const getRacebyYear = (year: number) => RaceModel.findOne({ year: year });
// export const getUserBySessionToken = (sessionToken: string) => RaceModel.findOne({ "authentication.sessionToken": sessionToken });
// export const getUserById = (id: string) => RaceModel.findById(id);
// export const createUser = (values: Record<string, any>) => new RaceModel(values).save().then((user) => user.toObject());

export { getAll };
