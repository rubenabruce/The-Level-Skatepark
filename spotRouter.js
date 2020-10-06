const express = require('express');
const spotRouter = express.Router();
const bodyParser = require('body-parser');

const sqlite3 = require('sqlite3');
const e = require('express');
const db = new sqlite3.Database('./database.sqlite');

// spotRouter.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
spotRouter.use(bodyParser.json());

spotRouter.get('/api', (req, res, next) => {
    // res.sendFile(htmlPath + 'local_spots.html');
    db.all('SELECT * FROM Spots', (err, spots) => {
        if(err) {
            next(err);
        } else {
            return res.status(200).json({spots: spots});
        }
    });
})

spotRouter.get('/comments/:spotID', (req, res, next) => {
    // console.log(req.body)
    db.all('SELECT * FROM Comments WHERE spotID = $spotID', {$spotID: req.params.spotID}, (err, comments) => {
        if (err) {
            next(err);
        } else {
            res.status(200).json({comments: comments})
        } 
    })
})

spotRouter.post('/comment', (req, res, next) => {
    // console.log(req)
    if (!req.body.commentName || !req.body.commentContent) {
        console.log(req.body.commentName, req.body.commentContent)
        return res.sendStatus(400)
    }
    try {
        db.run('INSERT INTO Comments (commentName, commentContent, spotID) VALUES ($commentName, $commentContent, $spotID)', {$commentName: req.body.commentName, $commentContent: req.body.commentContent, $spotID: req.body.spotID}, (error) => {          
            if (error) {
                next(error);
            } else {
                res.status(201).json({
                    comment: req.body
                });
            }
        })
    } catch (error) {
        console.error(error);
    }
});


module.exports = spotRouter;