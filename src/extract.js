const fs = require("fs");
const GBan = require("../lists/all.json");

// all

fs.writeFileSync("./list.json", JSON.stringify(GBan, null, 4));

// fs.mkdirSync("./lists/names");
// fs.mkdirSync("./lists/xuids");
// fs.mkdirSync("./lists/deviceSessionIds");
// fs.mkdirSync("./lists/uuids");
// fs.mkdirSync("./lists/servers");

// name

const name = GBan.map(banned => banned.name);

fs.writeFileSync("./lists/names/.json", JSON.stringify(name, null, 4));
fs.writeFileSync("./lists/names/.txt", name.join("\n"));
console.log(`Extracted ${name.length} names.`);

// xuid

const xuid = GBan.map(banned => banned.xuid);

fs.writeFileSync("./lists/xuids/.json", JSON.stringify(xuid, null, 4));
fs.writeFileSync("./lists/xuids/.txt", xuid.join("\n"));
console.log(`Extracted ${xuid.length} xuids.`);

// deviceSessionId

const deviceSessionId = GBan.map(banned => banned.deviceSessionId).filter(
    id => id
);

fs.writeFileSync(
    "./lists/deviceSessionIds/.json",
    JSON.stringify(deviceSessionId, null, 4)
);
fs.writeFileSync("./lists/deviceSessionIds/.txt", deviceSessionId.join("\n"));
console.log(`Extracted ${deviceSessionId.length} deviceSessionIds.`);

// uuid

const uuid = GBan.map(banned => banned.uuid).filter(id => id);

fs.writeFileSync("./lists/uuids/.json", JSON.stringify(uuid, null, 4));
fs.writeFileSync("./lists/uuids/.txt", uuid.join("\n"));
console.log(`Extracted ${uuid.length} uuids.`);

console.log("");

// servers

const servers = new Set(GBan.map(banned => banned.source));

fs.readdirSync("./lists/servers").forEach(file => {
    fs.unlinkSync(`./lists/servers/${file}`);
});

servers.forEach(server => {
    if (server) {
        const filter = GBan.filter(banned => banned.source === server);
        fs.writeFileSync(
            `./lists/servers/${server.replace(/( )/g, "_")}.json`,
            JSON.stringify(filter, null, 4)
        );
        console.log(`Extracted ${filter.length} accounts from ${server}.`);
    }
});

console.log("");
console.log(`Extracted ${xuid.length} servers.`);
