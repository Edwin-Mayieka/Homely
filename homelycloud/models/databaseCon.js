var mysql=require('mysql');
const dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'homely',
    password: 'Eddy4321',
    database: 'Homely'
  });
  dbCon.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
  });

module.exports = dbCon;