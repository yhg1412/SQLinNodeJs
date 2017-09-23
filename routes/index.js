var express = require('express');
var router = express.Router();
var path = require('path');

// Connect string to MySQL
var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'fling.seas.upenn.edu',
  user     : 'boyihe',
  password : 'mcgill2016',
  database : 'boyihe'
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'index.html'));
});

router.get('/person', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../', 'views', 'person.html'));
});

router.get('/sqlFunction/:email',function(req,res){
  query = "SELECT * FROM Person";
  var email = req.params.email;
  if (email) query = query + " WHERE login='" + email + "'";
  connection.query(query, function(err, rows, fields) {
    if (err) console.log(err);
    else res.json(rows);
  });
});
/*
router.get('/validate/:creden', function(req, res) {
    console.log("Inside index");
    var creds = req.params.creden.split('&');
    connection.query('SELECT IsAdmin from Users where Login="'+creds[0]+'" AND Password ="'+creds[1]+'" ' ,function (err, rows, fields) {
        if (err) throw err;
        res.json(rows);
    });*/

/*    
router.get('/data', function(req,res){
	res.json([{"id": 1, "name": "Mymm", "city": "Pantano do Sul"},
        {"id": 2, "name": "Skyble", "city": "Guilmaro"},
        {"id": 3, "name": "Tagfeed", "city": "Gnosjö"},
        {"id": 4, "name": "Realcube", "city": "Jrashen"},
        {"id": 5, "name": "Bluejam", "city": "Zhangjiawo"},
        {"id": 6, "name": "Jayo", "city": "Obonoma"},
        {"id": 7, "name": "Cogidoo", "city": "Sungsang"},
        {"id": 8, "name": "Avavee", "city": "Diawara"},
        {"id": 9, "name": "Tagtune", "city": "Monywa"},
        {"id": 10, "name": "Centimia", "city": "Retkovci"}]);
});*/

module.exports = router;
