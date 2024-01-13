const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const GBan = require("../lists/all.json");


GBan.forEach((banned, i) => {
    const url = banned.proof;
    if (url.includes("un-known.xyz")) return;
    console.log(url);
    getRedirectUrl(url, (finalUrl) => {
        console.log(finalUrl);
        const imageUrl = finalUrl.split('?')[0];
        if (imageUrl.endsWith('.png')) {
            const filename = banned.xuid + ".png";
        
            downloadImage(imageUrl, filename, () => {
                console.log('Image downloaded and saved as', filename);
                banned.proof = `https://gban.un-known.xyz/proofs/${filename}`;
                GBan[i] = banned;
                fs.writeFileSync("./lists/all.json", JSON.stringify(GBan, null, 4));
            });
        } else if (imageUrl.endsWith('.jpeg')) {
            const filename = banned.xuid + ".jpeg";
        
            downloadImage(imageUrl, filename, () => {
                console.log('Image downloaded and saved as', filename);
                banned.proof = `https://gban.un-known.xyz/proofs/${filename}`;
                GBan[i] = banned;
                fs.writeFileSync("./lists/all.json", JSON.stringify(GBan, null, 4));
            });
        } else if (imageUrl.endsWith('.jpg')) {
            const filename = banned.xuid + ".jpg";
        
            downloadImage(imageUrl, filename, () => {
                console.log('Image downloaded and saved as', filename);
                banned.proof = `https://gban.un-known.xyz/proofs/${filename}`;
                GBan[i] = banned;
                fs.writeFileSync("./lists/all.json", JSON.stringify(GBan, null, 4));
            });
        } else if (imageUrl.endsWith('.gif')) {
            const filename = banned.xuid + ".gif";
        
            downloadImage(imageUrl, filename, () => {
                console.log('Image downloaded and saved as', filename);
                banned.proof = `https://gban.un-known.xyz/proofs/${filename}`;
                GBan[i] = banned;
                fs.writeFileSync("./lists/all.json", JSON.stringify(GBan, null, 4));
            });
        } else if (imageUrl.endsWith(".mp4")) {
            const filename = banned.xuid + ".mp4";
        
            downloadImage(imageUrl, filename, () => {
                console.log('Image downloaded and saved as', filename);
                banned.proof = `https://gban.un-known.xyz/proofs/${filename}`;
                GBan[i] = banned;
                fs.writeFileSync("./lists/all.json", JSON.stringify(GBan, null, 4));
            });
        }
        
    });
});



// getRedirectUrl(url, (finalUrl) => {
//     console.log(finalUrl);
//     const imageUrl = finalUrl.split('?')[0];
//     if (!imageUrl.endsWith('.png')) {
//         console.error('Not a png image.');
//         return;
//     }
//     const filename = "downloaded_image.png";
    
//     downloadImage(imageUrl, filename, () => {
//         console.log('Image downloaded and saved as', filename);
//     });
// });


function getRedirectUrl(url, callback) {
    const client = url.startsWith('https') ? https : http;

    client.get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
            getRedirectUrl(res.headers.location, callback);
        } else {
            callback(url);
        }
    }).on('error', (err) => {
        console.error(err.message);
    });
}

function downloadImage(url, filename, callback) {
    const file = fs.createWriteStream(path.join('proofs', filename));
    https.get(url, (response) => {
        response.pipe(file);
        file.on('finish', () => {
            file.close(callback);
        });
    }).on('error', (err) => {
        fs.unlink(path.join('proofs', filename));
        console.error(err.message);
    });
}