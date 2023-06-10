import mongoose from "mongoose";
const Team = new mongoose.Schema({
     _id: mongoose.Schema.Types.ObjectId,
     year: Number,
     data: [],
});

export const TeamModel = mongoose.model("teams", Team);

// User Actions

async function find(year: Number, team: String) {
     let data = null;
     console.log(`year : ${year} team : ${team}`);
     if (team == "undefined") team = null;
     console.log(`year : ${year ? true : false} team : ${team ? true : false}`);
     if (!year && !team) {
          data = await TeamModel.find({});
     } else if (year && team) {
          console.log(" running 1");
          data = await TeamModel.find({ year: year, "data.Team": team });
     } else if (year) {
          console.log(" run here 2  ");
          data = await TeamModel.find({ year: year });
     } else if (team) {
          console.log(" run here 3  ");
          data = await TeamModel.find({ "data.Team": team });
     }
     return data;
     // if (!year && team) data = await TeamModel.find({data : })
}
export const getRacebyYear = (year: number) => TeamModel.findOne({ year: year });

export { find };
