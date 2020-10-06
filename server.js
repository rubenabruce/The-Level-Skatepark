const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const errorhandler = require('errorhandler');
const multer = require('multer');
const cors = require('cors');
const htmlPath = __dirname + '/dist/';
const path = require('path');
const spotRouter = require('./spotRouter');

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

const app = express(), DIST_DIR = __dirname, HTML_HOME = path.join(DIST_DIR, 'dist', 'home.html');

const PORT = process.env.PORT || 4001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())
app.use(morgan('dev'));
app.use(express.static(path.join(DIST_DIR, 'dist')));

app.use('/local_spots.html', spotRouter)

app.get('/', (req, res, next) => {
    res.sendFile(HTML_HOME);
})

app.get('/is_level_dry.html', (req, res, next) => {
    res.sendFiles(htmlPath + 'is_level_dry.html')
})

app.get('/level_cafe.html', (req, res, next) => {
    res.sendFile(htmlPath + 'level_cafe.html');
})


app.get('/upload_spot.html', (req, res, next) => {
    res.sendFile(htmlPath + 'upload_spot.html');
})

// multer storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './dist/resources/spots');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, new Date().toISOString().replace(/:/g, '-') + path.extname(file.originalname));
    }
});
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });
var cpUpload = upload.fields([{ name: 'mainImg', maxCount: 1 }, { name: 'spotImgs', maxCount: 8 }]);
app.post('/upload', cpUpload, (req, res, next) => {
    console.log(req.body)
    if(!req.body.name || !req.body.spotDesc || !req.body.location) {
        return res.sendStatus(400);
    }
    let spotImgsPaths = '';
    for (let i=0;i < req.files['spotImgs'].length;i++) {
        spotImgsPaths = req.files['spotImgs'][i].path.replace('dist', '..') + ',' + spotImgsPaths ;
    }
    console.log(spotImgsPaths);
    var main_image = req.files['mainImg'][0].path.replace('dist', '..');
    try {
        db.run('INSERT INTO Spots (name, desc, position, main_image, images) VALUES ($name, $desc, $position, $main_image, $images)', {$name: req.body.name, $desc: req.body.spotDesc, $position: req.body.location, $main_image: main_image, $images: spotImgsPaths.slice(0, -1)}, (error) => {
            if (error) {
                next(error);
            } else {
                res.status(201).json({
                    message: 'File uploded successfully'
                });
            }
        })
    } catch (error) {
        console.error(error);
    }
});

// app.use(errorhandler());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});