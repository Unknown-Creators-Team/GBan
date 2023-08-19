const fs = require("fs");
const GBan = require("../lists/all.json");

// all

fs.writeFileSync("./list.json", JSON.stringify(GBan, null, 4));

// name

const name = GBan.map(banned => banned.name);

fs.writeFileSync("./lists/name/.json", JSON.stringify(name, null, 4));
fs.writeFileSync("./lists/name/.txt", name.join("\n"));

// xuid

const xuid = GBan.map(banned => banned.xuid);

fs.writeFileSync("./lists/xuid/.json", JSON.stringify(xuid, null, 4));
fs.writeFileSync("./lists/xuid/.txt", xuid.join("\n"));

// deviceSessionId

const deviceSessionId = GBan.map(banned => banned.deviceSessionId).filter(
    id => id
);

fs.writeFileSync(
    "./lists/deviceSessionId/.json",
    JSON.stringify(deviceSessionId, null, 4)
);
fs.writeFileSync("./lists/deviceSessionId/.txt", deviceSessionId.join("\n"));

// uuid

const uuid = GBan.map(banned => banned.uuid).filter(id => id);

fs.writeFileSync("./lists/uuid/.json", JSON.stringify(uuid, null, 4));
fs.writeFileSync("./lists/uuid/.txt", uuid.join("\n"));

// servers

const servers = GBan.map(banned => banned.source);

servers.forEach(server => {
    if (server) {
        fs.writeFileSync(
            `./lists/servers/${server}.json`,
            JSON.stringify(
                GBan.filter(banned => banned.source === server),
                null,
                4
            )
        );
    }
});
