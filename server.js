const { app } = require('./index.js');

// Start the server (no database connection)
const PORT = 3000;

// Start listening on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const {app} =require ('./index.js');
const dh_access = require('./db.js');
const db = db_access.db;

const port =3000;

db.serialize(()=>{
  db.run(db-dh_access.createtriptable, (err) =>{
    if (err)console.log('error creating trip table:',err.message);
  });

  db.run(db_access.createtriptable,(err) => {
    if (err) console.log ('error creating trip table',err.message);
  });
});
