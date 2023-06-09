import mongoose from "mongoose";
const Team = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     year: Number,
     data: [],
});

export const TeamModel = mongoose.model("teams", Team);

// User Actions

async function getAll() {
     console.log(" run hereh");
     //  let data = await RaceModel.find({});
     let data = await TeamModel.find({});
     return data;
}
export const getRacebyYear = (year: number) => TeamModel.findOne({ year: year });
// export const getUserBySessionToken = (sessionToken: string) => RaceModel.findOne({ "authentication.sessionToken": sessionToken });
// export const getUserById = (id: string) => RaceModel.findById(id);
// export const createUser = (values: Record<string, any>) => new RaceModel(values).save().then((user) => user.toObject());

export { getAll };
