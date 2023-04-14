 
const pg = require('pg');
const express = require("express");
 
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
 
const pool = new pg.Pool({
  host: "localhost",
  user: "postgres",
  database: "lab8",
  password: "anka07102004",
  port: 5432,
});
 
app.set("view engine", "hbs");

 
app.get('/', function(req, res) {
  pool.query('SELECT * FROM teachers ORDER BY surname', function(err, result) {
    if (err) return console.log(err);
    res.render('index', {
      teachers: result.rows
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
  const telephon = req.body.telephon;
  const stage = req.body.stage;
  pool.query('INSERT INTO teachers (surname, name, pobatkovi, telephon, stage) VALUES ($1, $2, $3, $4, $5)', [surname, name, pobatkovi, telephon, stage], function(err, result) {
    if (err) return console.log(err);
    res.redirect('/');
  });
});


// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit/:id", function(req, res) {
  const id = req.params.id;
  pool.query("SELECT * FROM teachers WHERE id=$1::bigint", [id], function(err, data) {
    if (err) {
      return console.error(err);
    } else {
      res.render("edit", {
        teacher: data.rows[0]
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
  const telephon = req.body.telephon;
  const stage = req.body.stage;
  pool.query('UPDATE teachers SET surname = $1, name = $2, pobatkovi = $3, telephon = $4, stage = $5 WHERE id = $6', [surname, name, pobatkovi, telephon, stage, id], function(err, data) {
    if (err) 
    return console.log(err);
    res.redirect('/');
  });
});


 
// получаем id удаляемого пользователя и удаляем его из бд
app.post('/delete/:id', urlencodedParser, function(req, res) {
  const id = req.params.id;
  pool.query('DELETE FROM teachers WHERE id = $1', [id], function(err, result) {
    if (err) return console.log(err);
    res.redirect('/');
  });
});
 
///////////////////////////////////////////////////////////////////////
// получение списка students
app.get("/1", function(req, res){
    pool.query("SELECT * FROM students", function(err, result) {
      if(err) return console.log(err);
      res.render('index', {
        students: result.rows
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
    pool.query("INSERT INTO students (special,viddilennya,numofstudents) VALUES ($1, $2, $3)", [special,viddilennya,numofstudents], function(err, data) {
      if(err) return console.log(err);
      res.redirect("/1");
    });
});
 
// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit1/:Id", function(req, res){
  const Id = req.params.Id;
  pool.query("SELECT * FROM students WHERE id=$1::bigint", [Id], function(err, data) {
    if(err) return console.log(err);
     res.render("edit1", {
        student: data.rows[0]
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
   
  pool.query("UPDATE students SET special=$1, viddilennya=$2,numofstudents=$3 WHERE id=$4", [special,viddilennya,numofstudents,id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/1");
  });
});
 
// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete1/:id", function(req, res){
          
  const id = req.params.id;
  pool.query("DELETE FROM students WHERE id=$1", [id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/1");
  });
});

/////////////////////////////////////////////////////////////////////////////////
// получение списка navantazhennya
app.get("/2", function(req, res){
  pool.query("SELECT * FROM navantazhennya", function(err, result) {
    if(err) return console.log(err);
    res.render('index', {
      navantazhennya: result.rows
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
  pool.query("INSERT INTO navantazhennya (teachersid,studentsid,numofhours,namepredmet,typepredmet,oplata) VALUES ($1, $2, $3,$4, $5, $6)", [teachersid,studentsid,numofhours,namepredmet,typepredmet,oplata], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/2");
  });
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit2/:id", function(req, res){
const id = req.params.id;
pool.query("SELECT * FROM navantazhennya WHERE id=$1", [id], function(err, data) {
  if(err) return console.log(err);
   res.render("edit2.hbs", {
      hour: data.rows[0]
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
 
pool.query("UPDATE navantazhennya SET teachersid=$1,studentsid=$2,numofhours=$3,namepredmet=$4,typepredmet=$5,oplata=$6 WHERE id=$7", [teachersid,studentsid,numofhours,namepredmet,typepredmet,oplata,id], function(err, data) {
  if(err) return console.log(err);
  res.redirect("/2");
});
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete2/:id", function(req, res){
        
const id = req.params.id;
pool.query("DELETE FROM navantazhennya WHERE id=$1", [id], function(err, data) {
  if(err) return console.log(err);
  res.redirect("/2");
});
});
////////////////////////////////////////////////////////////////////////
// получение списка teacherpredmet
app.get("/3", function(req, res){
  pool.query("SELECT * FROM teacherpredmet", function(err, result) {
    if(err) return console.log(err);
    res.render('index', {
      teacherpredmet: result.rows
    });
  });
});


// возвращаем форму для добавления данных
app.get("/create3", function(req, res){
  res.render("create3.hbs");
});

// получаем отправленные данные и добавляем их в БД 
app.post("/create3", urlencodedParser, function (req, res) {
       
  if(!req.body) return res.sendStatus(400);
  const namepredmet = req.body.namepredmet;
  const stage = req.body.stage;
  const teachersid = req.body.teachersid;
  pool.query("INSERT INTO teacherpredmet (namepredmet,stage,teachersid) VALUES ($1, $2, $3)", [namepredmet,stage,teachersid], function(err, data) {
    if(err) return console.log("Перевірте правильність написання предмету та існування викладача з таким id");
    res.redirect("/3");
  });
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit3/:id", function(req, res){
const id = req.params.id;
pool.query("SELECT * FROM teacherpredmet WHERE id=$1::bigint", [id], function(err, data) {
  if(err) return console.log(err);
   res.render("edit3", {
    teacherpredmet: data.rows[0]
  });
});
});


// получаем отредактированные данные и отправляем их в БД
app.post("/edit3", urlencodedParser, function (req, res) {
       
if(!req.body) return res.sendStatus(400);
const namepredmet = req.body.namepredmet;
const stage = req.body.stage;
const teachersid = req.body.teachersid;
const id = req.body.id;
 
pool.query("UPDATE teacherpredmet SET namepredmet=$1, stage=$2,teachersid=$3 WHERE id=$4", [namepredmet,stage,teachersid,id], function(err, data) {
  if(err) return console.log("Такого викладача немає");
  res.redirect("/3");
});
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete3/:id", function(req, res){
        
const id = req.params.id;
pool.query("DELETE FROM teacherpredmet WHERE id=$1", [id], function(err, data) {
  if(err) return console.log(err);
  res.redirect("/3");
});
});

////////////////////////////////////////////////////////////////////////
// получение списка predmet
app.get("/4", function(req, res){
  pool.query("SELECT * FROM predmet", function(err, result) {
    if(err) return console.log(err);
    res.render('index', {
      predmet: result.rows
    });
  });
});


// возвращаем форму для добавления данных
app.get("/create4", function(req, res){
  res.render("create4.hbs");
});

// получаем отправленные данные и добавляем их в БД 
app.post("/create4", urlencodedParser, function (req, res) {
       
  if(!req.body) return res.sendStatus(400);
  const namepredmet = req.body.namepredmet;
  const hoursoplata = req.body.hoursoplata;
  pool.query("INSERT INTO predmet (namepredmet,hoursoplata) VALUES ($1, $2)", [namepredmet,hoursoplata], function(err, data) {
    if(err) return console.log("Перевірте правильність написання предмету");
    res.redirect("/4");
  });
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit4/:namepredmet", function(req, res){
const namepredmet = req.params.namepredmet;
pool.query("SELECT * FROM predmet WHERE namepredmet=$1", [namepredmet], function(err, data) {
  if(err) return console.log(err);
   res.render("edit4", {
    predmet: data.rows[0]
  });
});
});


// получаем отредактированные данные и отправляем их в БД
app.post("/edit4", urlencodedParser, function (req, res) {
       
if(!req.body) return res.sendStatus(400);
const namepredmet = req.body.namepredmet;
const hoursoplata = req.body.hoursoplata;

 
pool.query("UPDATE predmet SET  hoursoplata=$1  WHERE namepredmet=$2", [hoursoplata,namepredmet], function(err, data) {
  if(err) return console.log("Такого предмету немає");
  res.redirect("/4");
});
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete4/:namepredmet", function(req, res){
        
const namepredmet = req.params.namepredmet;
pool.query("DELETE FROM predmet WHERE namepredmet=$1", [namepredmet], function(err, data) {
  if(err) return console.log(err);
  res.redirect("/4");
});
});

app.listen(3000, function(){
  console.log("Сервер ожидает подключения...");
});