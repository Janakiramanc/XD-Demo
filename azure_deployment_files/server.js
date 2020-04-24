const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const q = require("q");
const fs = require('fs');
// const cors = require('cors');
let port = process.env.PORT || 2000;
const webPush = require("web-push");

const dataPath = './data/productList.json';

var subscriptions = [];
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// let corsOptions = { origin: false }
//For getting list of Products
app.get('/productsList', (req, res, next) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            throw err;
        } else {
            console.log("Just data", data)
        }
        res.send(JSON.parse(data));
    });
});

app.post('/addToProductsList', (req, res, next) => {
    let product = req.body.obj;
    fs.readFile(dataPath, 'utf-8', function(err, data) {
        if (err) throw err
        var arrayOfObjects = JSON.parse(data)
        arrayOfObjects[product.productId] = product;
        fs.writeFile(dataPath, JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
            if (err) throw err
            res.send({
                ProductId: product.productId,
                ResponseMessage: 'Product added successfully'
            });
        })
    })

});

//For Push Notification
const vapidPublicKey =
    "BOYJZKXQblXrn8rtRpeTuZCY8yN2qpnn4zoUrVHvpAJYJGfbitAGiKdYt_RKpr3orY1kZDZ4VJRSANSHywUdXxU";
const vapidPrivateKey = "Zn5fW0Ful8HAkLzq8jbr39eE86226NO9Yv7Yed-R-Ko";

const options = {
    // gcmAPIKey: 'YOUR_SERVER_KEY',
    TTL: 60,
    vapidDetails: {
        subject: "mailto:anandi.yogeesan@gmail.com",
        publicKey: vapidPublicKey,
        privateKey: vapidPrivateKey
    }
};

//Subscribe Users Api
app.post("/subscribe", (req, res) => {
    console.log("Request is", req);
    console.log("Request Body is", req.body);
    let isAlreadySubscribed = false;
    subscriptions.map(sub => {
        if (sub.keys.auth == req.body.keys.auth) {
            isAlreadySubscribed = true;
        }
    });
    if (!isAlreadySubscribed) {
        subscriptions.push(req.body);
    }
    res.status(201).json({});
    console.log("subscription after subscribing", subscriptions.length);
});

//Send Notification Api
app.post("/productNotification", (req, res) => {
    res.status(201).json({});
    const payload = req.body;
    console.log("Subscription in post", subscriptions);
    let parallelSubscriptionCalls = subscriptions.map(subscription => {
        return new Promise((resolve, reject) => {
            webPush
                .sendNotification(subscription, payload.name, options)
                .then(value => {
                    resolve({
                        status: true,
                        endpoint: subscription.endpoint,
                        data: value
                    });
                })
                .catch(err => {
                    reject({
                        status: false,
                        endpoint: subscription.endpoint,
                        data: err
                    });
                });
        });
    });
    q.allSettled(parallelSubscriptionCalls).then(pushResults => {
        console.info(pushResults);
    });
});

app.get("*", function(req, res) {
    res.redirect("https://" + req.headers.host + req.url);
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, function(err) {
    console.log("App started");
});