// example 2 

let GBan = [];

fetch("https://gban.un-known.xyz/list.json")
.then(response => response.json())
.then(json => {
    GBan = json;
    console.debug(JSON.stringify(GBan, null, 2));
})
.catch(console.error);