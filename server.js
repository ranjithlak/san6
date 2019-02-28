const express = require('express'),
     fs = require('fs');
    path = require('path'),
     bodyParser = require('body-parser'),
     multer = require('multer');
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');
    const DIR = 'uploads';
    

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const adUnitRoutes = require('./routes/adunit.route');
    
    app.use(bodyParser.urlencoded({extended: true}));

    app.use(bodyParser.json());
    app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
    });

    let storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, 'src/assets/uploads');
      },
      filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
      }
  });
  

    let upload = multer({storage: storage});
    /** API path that will upload the files */
    app.get('/api', function (req, res) {
      res.end('file catcher example');
    });
     
    app.post('/api/upload',upload.single('photo'), function (req, res) {
        if (!req.file) {
            console.log("No file received");
            return res.send({
              success: false
            });
        
          } else {
            console.log('file received');
            return res.send({
              success: true
            })
          }
    });
    
    
    app.use(cors());
    
    
    app.use('/adunites', adUnitRoutes);

    const PORT = process.env.PORT || 3000;
    const server = app.listen(PORT, function(){
      console.log('Listening on port ' + port);
     });


    const port = process.env.PORT || 4000;

    app.listen(port, function () {
     
     console.log('Node.js server is running on port ' + PORT);
    });