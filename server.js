const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const fs = require('fs');
const readline = require('readline');
// const { query } = require('express');

const app = express();

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'iamlegend1109',
  database: 'sep_test',
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// fill the table in database with all data in sep.csv file
app.get('/', (req, res) => {
  // (C) IMPORT CSV
  // (C1) CREATE FILE STREAM + SQL QUERY
  const reader = readline.createInterface({
      input: fs.createReadStream('./sep.csv'),
    }),
    query =
      'INSERT INTO sep_list (codep_int, Name, Famil, Name_Kdmat, TELEFON, SanavatKhedmati, DVorud, DarajehMosavab, Name_Ozvit, Jens, NamePedar, CodeMelli, Expr1, Code_Kdmat, MadrakTahsili, Ozvieat, Expr2, Jaygah) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';

  // (C2) IMPORT ROW-BY-ROW
  reader.on('line', row => {
    row = row.split(',');
    db.query(query, row, (err, results, fields) => {
      if (err) {
        return console.error(err.message);
      }
      console.log('USER ID:' + results.insertId);
      res.send(results);
    });
  });
});
// get all fields from database
app.get('/api/get', (req, res) => {
  const sqlSelectAll = 'SELECT * FROM sep_list';
  db.query(sqlSelectAll, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

// get all data from main_mission
app.get('/api/get/mainmission', (req, res) => {
  const sqlSelectAllMission = 'SELECT * FROM main_mission';
  db.query(sqlSelectAllMission, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

// post data to main_mission
app.post('/api/post/mainmission', (req, res) => {
  const { name } = req.body;
  const sqlInsert = 'INSERT INTO main_mission (Name) VALUES (?)';
  db.query(sqlInsert, [name], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// get all data from sub_mission
app.get('/api/get/submission', (req, res) => {
  const sqlSelectAllSubMission = 'SELECT * FROM sub_mission';
  db.query(sqlSelectAllSubMission, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

// post data to sub_mission
app.post('/api/post/submission', (req, res) => {
  const { name, id } = req.body;
  const sqlInsert =
    'INSERT INTO sub_mission (Name,id_mainmission) VALUES (?,?)';
  db.query(sqlInsert, [name, id], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
});

// update data to sub_mission item
app.put('/api/update/submission', (req, res) => {
  const { ids, subId } = req.body;
  const sqlSelectAll = `UPDATE sep_test.sub_mission SET id_requirements = '[${ids}]' WHERE (ID = ${subId})`;
  db.query(sqlSelectAll, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

// get all Mission_Requerments from mission_requermets_list
app.get('/api/get/mission_requerments', (req, res) => {
  const sqlSelectAll = 'SELECT * FROM mission_requermets_list';
  db.query(sqlSelectAll, (err, result, fields) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
