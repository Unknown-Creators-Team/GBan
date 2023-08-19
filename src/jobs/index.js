const fs = require("fs");

const GBan = require("../../list.json");

const users = {
    "nano": [],
    "wako": [],
    "mikan": []
}

GBan.forEach((banned, i) => {
    const newObject = {
        name: null,
        reason: null,
        xuid: null,
        deviceSessionId: null,
        uuid: null,
        source: null,
        proof: null,
    }
    users[Object.keys(users)[i % 3]].push({...newObject, ...banned});
});

Object.keys(users).forEach((user) => {
    const list = users[user];
    list.sort((a, b) => a.name.localeCompare(b.name));
    fs.writeFileSync(`./jobs/${user}.json`, JSON.stringify(list, null, 4));
});