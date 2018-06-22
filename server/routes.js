const path = require('path');
var http = require('http');
const https = require('https');
var request = require('request');
const fetch = require('node-fetch');
var options = {
    host: 'http://axdeseccwcs7.central.inditex.grp/itxrest/',
    path: '2/catalog/store/84009900?languageId=-5&appId=1'
};

module.exports = function(router) {

    //stores
    /*  router.route('/api/getStores').get(middleware.verifyJWT, storesCtrl.getStores);
     router.route('/api/getFilteredStores').get(middleware.verifyJWT, storesCtrl.getFilteredStores);
     router.route('/api/getStore/:store_id').get(middleware.verifyJWT, storesCtrl.getStore); */

    router.route('/2/catalog/store/84009900').get(function(req, res) {
        console.log(req.params);
        request.get(`${options.host}2/catalog/store/84009900?languageId=-5&appId=1`, (err, resp, data) => {
            res.send(data)
        })
    });

    router.route('/2/user/store/84009900/identity').post(function(req, res) {
        request.post({
            url: `${options.host}2/user/store/84009900/identity`,
            data: req.body
        }, function(error, response, body2) {
            console.log('body2', body2);
            console.log('error', error);
            //console.log('response', response);
            res.send(response)
        })
        /* fetch(`${options.host}2/user/store/84009900/identity`, {
                method: 'POST',
                body: JSON.stringify(req.body),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(response => {
                console.log(response.json())
                return response.json()
            })
            .catch((e) => console.log(e)) */

    });

    //
    router.get('*', function(req, res) {
        console.log(req.params);
        res.sendFile(path.join(__dirname, '/../dist/index.html'));
    }); // load the single view file (angular will handle the page changes on the front-end)


};