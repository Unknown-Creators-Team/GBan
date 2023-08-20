const fs = require("fs");
const GBan = require("../lists/all.json");

GBan.sort((a, b) => a.name.localeCompare(b.name));

fs.writeFileSync("./lists/all.json", JSON.stringify(GBan, null, 4));
console.log(`Sorted ${GBan.length} accounts.`);