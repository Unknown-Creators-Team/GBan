// example 1

let GBan = [];

fetch("https://api.github.com/repos/Unknown-Creators-Team/GBan/contents/list.json")
.then(response => response.json())
.then(json => {
    const list = atob(json.content);
    GBan = JSON.parse(list);
    console.log(JSON.stringify(GBan, null, 2));
})
.catch(console.error);