const express = require('express');
const sqlite3 = require('sqlite3');

 
const app = express();

const db = new sqlite3.Database('C:\\sqlite\\lb9.db');

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

const urlencodedParser = express.urlencoded({extended: false});

app.get('/', function(req, res) {
  db.all('SELECT * FROM teachers ORDER BY surname', function(err, result) {
    if (err) return console.log(err);
    res.render('index', {
      teachers: result
    });
  });
});
// возвращаем форму для добавления данных
app.get('/create', function(req, res) {
  res.render('create');
});
// получаем отправленные данные и добавляем их в БД 
app.post('/create', urlencodedParser, function(req, res) {
  const surname = req.body.surname;
  const name = req.body.name;
  const pobatkovi = req.body.pobatkovi;
  const telephone = req.body.telephone;
  const stage = req.body.stage;
  db.all('INSERT INTO teachers (surname, name, pobatkovi, telephone, stage) VALUES ($1, $2, $3, $4, $5)', [surname, name, pobatkovi, telephone, stage], function(err, result) {
    if (err) return console.log(err);
    res.redirect('/');
  });
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit/:id", function(req, res) {
  const id = req.params.id;
  db.all("SELECT * FROM teachers WHERE id=$1", [id], function(err, data) {
    if (err) {
      return console.error(err);
    } else {
      res.render("edit", {
        teacher: data[0]
      });
    }
  });
});

// Редагування викладача
app.post('/edit', urlencodedParser, function(req, res) {
  const id = req.body.id;
  const surname = req.body.surname;
  const name = req.body.name;
  const pobatkovi = req.body.pobatkovi;
  const telephone = req.body.telephone;
  const stage = req.body.stage;
  db.all('UPDATE teachers SET surname = $1, name = $2, pobatkovi = $3, telephone = $4, stage = $5 WHERE id = $6', [surname, name, pobatkovi, telephone, stage, id], function(err, data) {
    if (err) 
    return console.log(err);
    res.redirect('/');
  });
});

 
// получаем id удаляемого пользователя и удаляем его из бд
app.post('/delete/:id', urlencodedParser, function(req, res) {
  const id = req.params.id;
  db.all('DELETE FROM teachers WHERE id = $1', [id], function(err, result) {
    if (err) return console.log(err);
    res.redirect('/');
  });
});

///////////////////////////////////////////////////////////////////////
// получение списка students
app.get("/1", function(req, res){
    db.all("SELECT * FROM students", function(err, result) {
      if(err) return console.log(err);
      res.render('index', {
        students: result
      });
    });
});

// возвращаем форму для добавления данных
app.get("/create1", function(req, res){
    res.render("create1.hbs");
});
// получаем отправленные данные и добавляем их в БД 
app.post("/create1", urlencodedParser, function (req, res) {
         
    if(!req.body) return res.sendStatus(400);
    const special = req.body.special;
    const viddilennya = req.body.viddilennya;
    const numofstudents = req.body.numofstudents;
    db.all("INSERT INTO students (special,viddilennya,numofstudents) VALUES ($1, $2, $3)", [special,viddilennya,numofstudents], function(err, data) {
      if(err) return console.log(err);
      res.redirect("/1");
    });
});
 
// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit1/:id", function(req, res){
  const id = req.params.id;
  db.all("SELECT * FROM students WHERE id=$1", [id], function(err, data) {
    if(err) return console.log(err);
     res.render("edit1", {
        student: data[0]
    });
  });
});

// получаем отредактированные данные и отправляем их в БД
app.post("/edit1", urlencodedParser, function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
  const special = req.body.special;
  const viddilennya = req.body.viddilennya;
  const numofstudents = req.body.numofstudents;
  const id = req.body.id;
   
  db.all("UPDATE students SET special=$1, viddilennya=$2,numofstudents=$3 WHERE id=$4", [special,viddilennya,numofstudents,id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/1");
  });
});
 
// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete1/:id", function(req, res){
          
  const id = req.params.id;
  db.all("DELETE FROM students WHERE id=$1", [id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/1");
  });
});

/////////////////////////////////////////////////////////////////////////////////
// получение списка navantazhennya
app.get("/2", function(req, res){
  db.all("SELECT * FROM navantazhennya", function(err, result) {
    if(err) return console.log(err);
    res.render('index', {
      navantazhennya: result
    });
  });
});
// возвращаем форму для добавления данных
app.get("/create2", function(req, res){
  res.render("create2.hbs");
});
// получаем отправленные данные и добавляем их в БД 
app.post("/create2", urlencodedParser, function (req, res) {
       
  if(!req.body) return res.sendStatus(400);
  const teachersid = req.body.teachersid;
  const studentsid = req.body.studentsid;
  const numofhours = req.body.numofhours;
  const namepredmet = req.body.namepredmet;
  const typepredmet = req.body.typepredmet;
  const oplata = req.body.oplata;
  db.all("INSERT INTO navantazhennya (teachersid,studentsid,numofhours,namepredmet,typepredmet,oplata) VALUES ($1, $2, $3,$4, $5, $6)", [teachersid,studentsid,numofhours,namepredmet,typepredmet,oplata], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/2");
  });
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit2/:id", function(req, res){
const id = req.params.id;
db.all("SELECT * FROM navantazhennya WHERE id=$1", [id], function(err, data) {
  if(err) return console.log(err);
   res.render("edit2.hbs", {
      hour: data[0]
  });
});
});
// получаем отредактированные данные и отправляем их в БД
app.post("/edit2", urlencodedParser, function (req, res) {
       
if(!req.body) return res.sendStatus(400);
const teachersid = req.body.teachersid;
const studentsid = req.body.studentsid;
const numofhours = req.body.numofhours;
const namepredmet = req.body.namepredmet;
const typepredmet = req.body.typepredmet;
const oplata = req.body.oplata;
const id = req.body.id;
 
db.all("UPDATE navantazhennya SET teachersid=$1,studentsid=$2,numofhours=$3,namepredmet=$4,typepredmet=$5,oplata=$6 WHERE id=$7", [teachersid,studentsid,numofhours,namepredmet,typepredmet,oplata,id], function(err, data) {
  if(err) return console.log(err);
  res.redirect("/2");
});
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete2/:id", function(req, res){
        
const id = req.params.id;
db.all("DELETE FROM navantazhennya WHERE id=$1", [id], function(err, data) {
  if(err) return console.log(err);
  res.redirect("/2");
});
});



app.listen(3000, function(){
  console.log("Сервер ожидает подключения...");
});

