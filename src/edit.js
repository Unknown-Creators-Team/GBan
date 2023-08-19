const fs = require("fs");
const file = require("./edit.json");

const newObject = {
    "name": "empty",
    "reason": "empty",
    "xuid": "empty",
    "deviceSessionId": null,
    "uuid": null,
    "source": "empty",
    "proof": "empty"
}

file.forEach((banned, i, array) => {
    const obj = {...newObject};
    Object.entries(obj).forEach(([key]) => {
        if (banned[key]) {
            obj[key] = banned[key];
        }
    });
    array[i] = obj;
});

fs.writeFileSync("./src/edit.json", JSON.stringify(file, null, 4));