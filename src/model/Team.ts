import mongoose from "mongoose";
const Team = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     year: Number,
     data: [],
});

export const TeamModel = mongoose.model("teams", Team);

// User Actions

async function find(year: Number, team: String) {
     let data;
     console.log(`year : ${year} team : ${team}`);
     if (!year && !team) data = await TeamModel.find({});
     if (year && !team) data = await TeamModel.find({ year: year });
     return data;
     // if (!year && team) data = await TeamModel.find({data : })
}
export const getRacebyYear = (year: number) => TeamModel.findOne({ year: year });
// export const getUserBySessionToken = (sessionToken: string) => RaceModel.findOne({ "authentication.sessionToken": sessionToken });
// export const getUserById = (id: string) => RaceModel.findById(id);
// export const createUser = (values: Record<string, any>) => new RaceModel(values).save().then((user) => user.toObject());

export { find };
