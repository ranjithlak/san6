const express = require('express');
const app = express();
const multer = require('multer');

const path = require('path');


const adUnitRoutes = express.Router();

// Require AdUnit model in our routes module
let AdUnit = require('../models/AdUnit');



    
       



// Defined store route
adUnitRoutes.route('/add').post(function (req, res) {
  
  let adUnit = new AdUnit(req.body);
  adUnit.save()
    .then(game => {
    res.status(200).json({'adUnit': 'AdUnit in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});


// Defined get data(index or listing) route
adUnitRoutes.route('/').get(function (req, res) {
  AdUnit.find(function (err, adUnits){
  if(err){
    console.log(err);
  }
  else {
    res.json(adUnits);
  }
});
});


adUnitRoutes.route('/edit/:fname').get(function (req, res) {
  let fname = req.params.fname;
  AdUnit.findById(fname, function (err, adUnit){
      res.json(adUnit);
  });
});







module.exports = adUnitRoutes;