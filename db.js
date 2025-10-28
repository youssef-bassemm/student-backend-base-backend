const sqlite = require('sqlite3');
const db = new sqlite.database ('travel.db');

//new trip table 
const createtriptable =`CRATE TABLE IF NOT EXICT TRIP(
ID INTEGER PRIMARY KEY AUTOINCREMENT,
DESTINATIONNAME TEXT NOT NULL,
LOCATION TEXT NOT NULL,
CONTINENT TEXT NOT NULL,
LANGUAGE TEXT NOT NULL,
DESCRIPTION TEXT NOT NULL,
FLIGHTCOST REAL default 0,
MEALCOST REAL default 0,
VISACOST REAL default 0,
TRANSPORTATIONCOST REAL DEFAULT 0,
CURRENCYCODE TEXT DEFAULT 'N/A'
)`;

module.exports ={
    db,
    createtriptable,
    createusertable,
};