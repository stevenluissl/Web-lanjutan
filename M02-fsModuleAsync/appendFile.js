const fs = require("fs");

fs.appendFile("mw.txt", "hi there", function (err) {
  if (err) throw err;
  console.log("Berhasil disimpan!");
});

