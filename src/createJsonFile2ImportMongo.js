import fs from "fs";
let startYear = 1950;
let endYear = 2023;
let types = ["races", "drivers", "team", "fastest-laps"];
let path = "../data/";
let filename = " ";

for (let type of types) {
     let NewInput = [];
     for (let year = startYear; year <= endYear; year++) {
          switch (type) {
               case "races":
                    filename = `races${year}.json`;
                    break;
               case "drivers":
                    filename = `drivers${year}.json`;
                    break;
               case "team":
                    filename = `team${year}.json`;
                    break;
               case "fastest-laps":
                    filename = `fasttest-laps${year}.json`;
                    break;
               default:
                    throw new Error("type not valid");
          }
          let data = fs.readFileSync(path + filename, "utf8");
          NewInput.push({ year: year, data: JSON.parse(data) });
     }
     console.log(" data ", NewInput);
     fs.writeFileSync(path + type + ".json", JSON.stringify(NewInput).replaceAll(/\\"/g, ""));
}
