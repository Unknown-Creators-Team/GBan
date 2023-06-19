// How to get GBan list

let GBan = [];

fetch("https://api.github.com/repos/191225/GBan/contents/list.json")
.then(response => response.json())
.then(json => {
    const list = atob(json.content);
    GBan = JSON.parse(list);
})
.catch(console.error);
