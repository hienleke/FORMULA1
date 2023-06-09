import * as cheerio from "cheerio";
import fs from "fs";

import request from "request";

let startYear = 1950;
let endYear = 2023;
let types = ["races", "drivers", "team", "fastest-laps"];
function General(type, year) {
     let URL = `https://www.formula1.com/en/results.html/${year}/`;
     let filename;
     switch (type) {
          case "races":
               URL += "races.html";
               filename = `races${year}.json`;
               break;
          case "drivers":
               URL += "drivers.html";
               filename = `drivers${year}.json`;
               break;
          case "team":
               URL += "team.html";
               filename = `team${year}.json`;
               break;
          case "fastest-laps":
               URL += "fastest-laps.html";
               filename = `fasttest-laps${year}.json`;
               break;
          default:
               throw new Error("type not valid");
     }
     request(URL, function (err, res, body) {
          if (err) {
               console.log(err);
          } else {
               let title = [];
               let $ = cheerio.load(body); //loading of complete HTML body
               let jsonData = [];
               $("table.resultsarchive-table thead tr th").each((index, element) => {
                    title.push($(element).text().replaceAll(" ", "").trim());
               });
               title = title.filter((x) => x != "");
               let table = $("table.resultsarchive-table");

               let listrow = table.find("tr");
               for (let tr of listrow) {
                    let tds = $(tr).find("td");
                    let j = 0;
                    let objectData = {};
                    for (let td of tds) {
                         let rawData = $(td).text().trim().replaceAll("  ", "").replaceAll("\n", "");
                         let getRealNameArr = $(td).text().trim().replaceAll("\n", "").split("  ");
                         if (getRealNameArr.length > 1) {
                              getRealNameArr = getRealNameArr.filter((ele) => ele != "");
                              rawData = getRealNameArr[0] + " " + getRealNameArr[1];
                         }
                         if (rawData == "") continue;
                         objectData[`${title[j]}`] = rawData;
                         j++;
                    }
                    if (Object.keys(objectData).length > 0) jsonData.push(objectData);
               }
               // console.log(" json data : ", jsonData);
               let content = JSON.stringify(jsonData);
               let path = "../data/";

               try {
                    console.log(" writing :  ", filename);
                    fs.writeFileSync(path + filename, content);
                    console.log(" write done :  ", filename);
               } catch (error) {
                    console.log(" err", error);
               }
          }
     });
}

for (let i = startYear; i <= endYear; i++) {
     for (let type of types) General(type, i);
}
