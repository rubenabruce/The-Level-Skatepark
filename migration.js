const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

db.serialize(function() {
    db.run(`CREATE TABLE IF NOT EXISTS Spots (
        id INTEGER PRIMARY KEY NOT NULL,
        name TEXT NOT NULL, 
        desc TEXT NOT NULL,
        position TEXT NOT NULL, 
        main_image TEXT NOT NULL,
        images TEXT)`
    );

    db.run(`CREATE TABLE IF NOT EXISTS Comments (
        id INTEGER PRIMARY KEY NOT NULL, 
        commentName TEXT NOT NULL, 
        commentContent TEXT NOT NULL,
        spotID INTEGER NOT NULL,
        FOREIGN KEY('spotId') REFERENCES 'Spots'('id') 
    )`);
})