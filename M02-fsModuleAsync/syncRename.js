const fs = require("fs");

try {
  fs.renameSync("mwpagi.json", "mwsore.json");
  //done
  console.log("berhasil ganti nama :) ");
} catch (err) {
  console.error(err);
}
