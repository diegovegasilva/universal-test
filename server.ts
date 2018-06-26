import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import * as express from 'express';
import { readFileSync } from 'fs';
import { enableProdMode } from '@angular/core';

const { AppServerModuleNgFactory } = require('./dist/zarahome6-server/main');

const request = require('request');
const options = {
    host: 'http://axdeseccwcs7.central.inditex.grp/itxrest/',
    path: '2/catalog/store/84009900?languageId=-5&appId=1'
};

enableProdMode();

const app = express();

const indexHtml = readFileSync(__dirname + '/dist/zarahome6/index.html', 'utf-8').toString();

app.route('http://localhost:3000/2/catalog/store/84009900?languageId=-5&appId=1').get(function (req, res) {
    console.log(req.params);
    request.get(`${options.host}2/catalog/store/84009900?languageId=-5&appId=1`, (err, resp, data) => {
        res.send(data)
    });
});


app.get('*.*', express.static(__dirname + '/dist/zarahome6', {
    maxAge: '1y'
}));



app.route('*').get((req, res) => {
    console.log('getting');
    renderModuleFactory(AppServerModuleNgFactory, {
        document: indexHtml,
        url: req.url
    })
        .then(html => {
            res.status(200).send(html);
        })
        .catch(err => {
            console.log('err');
            res.sendStatus(500);
        });

});

app.listen(9000, () => {
    console.log(`Angular Universal Node Express server listening on http://localhost:9000`);
});
