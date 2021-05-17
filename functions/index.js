const functions = require("firebase-functions");
const express = require("express");
const https = require("https");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
var invoice = {
    logo: "http://invoiced.com/img/logo-invoice.png",
    from: "Poorva Automobiles",
    to: "Johnny Appleseed",
    currency: "inr",
    number: "INV-0001",
    payment_terms: "Auto-Billed - Do Not Pay",
    date:new Date(),
    items: [
        {
            name: "Subscription to Starter",
            quantity: 1,
            unit_cost: 50,
        },
    ],
    fields: {
        tax: "%",
    },
    tax: 18,
    notes: "Thanks for being an awesome customer!",
    terms: "No need to submit payment. You will be auto-billed for this invoice.",
};

function getData(data) {
    return new Promise((resolve, reject) => {
        var postData = JSON.stringify({ ...invoice, ...data });
        var options = {
            hostname: "invoice-generator.com",
            port: 443,
            path: "/",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Content-Length": Buffer.byteLength(postData),
            },
        };
        let arrayBuff = [];
        var request = https.request(options, function (result) {
            result
                .on("data", function (chunk) {
                    arrayBuff.push(chunk);
                })
                .on("end", function () {
                    resolve(arrayBuff);
                });
        });
        request.on("error", (err) => {
            reject(err);
        });
        request.write(postData);
        request.end();
    });
}

app.post("/", async (req, res) => {
    const data = await getData(req.body);
    res.send(data);
});
exports.widgets = functions.https.onRequest(app);