const fs = require("fs");
const GBan = require("../lists/all.json");

GBan.forEach((banned, i) => {
    // duplicate
    const name = GBan.filter(b => b.name === banned.name);
    const xuid = GBan.filter(b => b.xuid === banned.xuid);
    const deviceSessionId = GBan.filter(
        b => b.deviceSessionId && b.deviceSessionId === banned.deviceSessionId
    );
    const uuid = GBan.filter(b => b.uuid && b.uuid === banned.uuid);

    if (name.length > 1)
        console.log(
            `${banned.name} has ${name.length} name duplicates (${name
                .map(b => b.name)
                .join(", ")})`
        );
    if (xuid.length > 1)
        console.log(
            `${banned.name} has ${xuid.length} xuid duplicates (${xuid
                .map(b => b.name)
                .join(", ")})`
        );
    if (deviceSessionId.length > 1)
        console.log(
            `${banned.name} has ${
                deviceSessionId.length
            } deviceSessionId duplicates (${deviceSessionId
                .map(b => b.name)
                .join(", ")})`
        );
    if (uuid.length > 1)
        console.log(
            `${banned.name} has ${uuid.length} uuid duplicates (${uuid
                .map(b => b.name)
                .join(", ")})`
        );
});
