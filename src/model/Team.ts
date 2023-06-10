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
          if (data.length > 0) data = data[0].data.find((ele) => ele.Team == team);
     } else if (year) {
          data = await TeamModel.find({ year: year });
     } else if (team) {
          data = await TeamModel.find({ "data.Team": team });
          for (let eleArray of data) {
               console.log(" eleArray : ", eleArray);
               eleArray.data = eleArray.data.find((i: any) => i.Team == team);
          }
     }
     return data;
}

export { find };
