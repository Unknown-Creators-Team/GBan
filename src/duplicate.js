const fs = require("fs");
const GBan = require("../lists/all.json");
const duplicated = [];

GBan.forEach((banned, i) => {
    // duplicate
    const name = GBan.filter(b => b.name === banned.name);
    const xuid = GBan.filter(b => b.xuid === banned.xuid);
    const deviceSessionId = GBan.filter(
        b => b.deviceSessionId && b.deviceSessionId === banned.deviceSessionId
    );
    const uuid = GBan.filter(b => b.uuid && b.uuid === banned.uuid);

    if (name.length > 1)
        duplicated.push(
            `${banned.name} has ${name.length} name duplicates (with ${name
                .map(b => b.name)
                .join(", ")})`
        );
    if (xuid.length > 1)
        duplicated.push(
            `${banned.name} has ${xuid.length} xuid duplicates (with ${xuid
                .map(b => b.name)
                .join(", ")})`
        );
    if (deviceSessionId.length > 1)
        duplicated.push(
            `${banned.name} has ${
                deviceSessionId.length
            } deviceSessionId duplicates (with ${deviceSessionId
                .map(b => b.name)
                .join(", ")})`
        );
    if (uuid.length > 1)
        duplicated.push(
            `${banned.name} has ${uuid.length} uuid duplicates (with ${uuid
                .map(b => b.name)
                .join(", ")})`
        );
});

if (duplicated.length > 0) {
    console.log(`Found ${duplicated.length} duplicates:`);
    new Set(duplicated).forEach(duplicate => console.log(duplicate));
} else {
    console.log(`No duplicate accounts found.`);
}
