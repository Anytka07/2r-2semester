const mysql = require("mysql2");
const express = require("express");
 
const app = express();
const urlencodedParser = express.urlencoded({extended: false});
 
const pool = mysql.createPool({
  connectionLimit: 5,
  host: "localhost",
  user: "root",
  database: "clasific",
  password: "anka07102004"
});
 
app.set("view engine", "hbs");
 
// получение списка пользователей
app.get("/", function(req, res){
    pool.query("SELECT * FROM teachers", function(err, data) {
      if(err) return console.log(err);
      res.render("index.hbs", {
        teachers: data
      });
    });
});
// возвращаем форму для добавления данных
app.get("/create", function(req, res){
    res.render("create.hbs");
});
// получаем отправленные данные и добавляем их в БД 
app.post("/create", urlencodedParser, function (req, res) {
         
    if(!req.body) return res.sendStatus(400);
    const Surname = req.body.Surname;
    const NameTeach = req.body.NameTeach;
    const LastName = req.body.LastName;
    const Telephon = req.body.Telephon;
    const Stage = req.body.Stage;
    pool.query("INSERT INTO teachers (Surname, NameTeach,LastName,Telephon,Stage) VALUES (?,?,?,?,?)", [Surname, NameTeach,LastName,Telephon,Stage], function(err, data) {
      if(err) return console.log(err);
      res.redirect("/");
    });
});
 
// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit/:id", function(req, res){
  const id = req.params.id;
  pool.query("SELECT * FROM teachers WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
     res.render("edit.hbs", {
        teacher: data[0]
    });
  });
});
// получаем отредактированные данные и отправляем их в БД
app.post("/edit", urlencodedParser, function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
  const Surname = req.body.Surname;
  const NameTeach = req.body.NameTeach;
  const LastName = req.body.LastName;
  const Telephon = req.body.Telephon;
  const Stage = req.body.Stage;
  const id = req.body.id;
   
  pool.query("UPDATE teachers SET Surname=?, NameTeach=?,LastName=?,Telephon=?,Stage=? WHERE id=?", [Surname, NameTeach,LastName,Telephon,Stage,id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});
 
// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete/:id", function(req, res){
          
  const id = req.params.id;
  pool.query("DELETE FROM teachers WHERE id=?", [id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/");
  });
});
 
///////////////////////////////////////////////////////////////////////
// получение списка students
app.get("/1", function(req, res){
    pool.query("SELECT * FROM clasific.students", function(err, data) {
      if(err) return console.log(err);
      res.render("index.hbs", {
        students: data
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
    const Special = req.body.Special;
    const Viddilenya = req.body.Viddilenya;
    const NumberOfStudents = req.body.NumberOfStudents;
    pool.query("INSERT INTO students (Special,Viddilenya,NumberOfStudents) VALUES (?,?,?)", [Special,Viddilenya,NumberOfStudents], function(err, data) {
      if(err) return console.log(err);
      res.redirect("/1");
    });
});
 
// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit1/:Id", function(req, res){
  const Id = req.params.Id;
  pool.query("SELECT * FROM students WHERE Id=?", [Id], function(err, data) {
    if(err) return console.log(err);
     res.render("edit1.hbs", {
        student: data[0]
    });
  });
});
// получаем отредактированные данные и отправляем их в БД
app.post("/edit1", urlencodedParser, function (req, res) {
         
  if(!req.body) return res.sendStatus(400);
  const Special = req.body.Special;
  const Viddilenya = req.body.Viddilenya;
  const NumberOfStudents = req.body.NumberOfStudents;
  const Id = req.body.Id;
   
  pool.query("UPDATE students SET Special=?, Viddilenya=?,NumberOfStudents=? WHERE Id=?", [Special, Viddilenya,NumberOfStudents,Id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/1");
  });
});
 
// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete1/:Id", function(req, res){
          
  const Id = req.params.Id;
  pool.query("DELETE FROM students WHERE Id=?", [Id], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/1");
  });
});

/////////////////////////////////////////////////////////////////////////////////
// получение списка navantazhennya
app.get("/2", function(req, res){
  pool.query("SELECT * FROM clasific.navantazhennya", function(err, data) {
    if(err) return console.log(err);
    res.render("index.hbs", {
      navantazhennya: data
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
  const StudentsId = req.body.StudentsId;
  const TeachersId = req.body.TeachersId;
  const NumOfHours = req.body.NumOfHours;
  const Predmet = req.body.Predmet;
  const TypeZanyttya = req.body.TypeZanyttya;
  const Oplata = req.body.Oplata;
  pool.query("INSERT INTO navantazhennya (StudentsId,TeachersId,NumOfHours,Predmet,TypeZanyttya,Oplata) VALUES (?,?,?,?,?,?)", [StudentsId,TeachersId,NumOfHours,Predmet,TypeZanyttya,Oplata], function(err, data) {
    if(err) return console.log(err);
    res.redirect("/2");
  });
});

// получем id редактируемого пользователя, получаем его из бд и отправлям с формой редактирования
app.get("/edit2/:Id", function(req, res){
const Id = req.params.Id;
pool.query("SELECT * FROM navantazhennya WHERE Id=?", [Id], function(err, data) {
  if(err) return console.log(err);
   res.render("edit2.hbs", {
      hour: data[0]
  });
});
});
// получаем отредактированные данные и отправляем их в БД
app.post("/edit2", urlencodedParser, function (req, res) {
       
if(!req.body) return res.sendStatus(400);
const StudentsId = req.body.StudentsId;
const TeachersId = req.body.TeachersId;
const NumOfHours = req.body.NumOfHours;
const Predmet = req.body.Predmet;
const TypeZanyttya = req.body.TypeZanyttya;
const Oplata = req.body.Oplata;
const Id = req.body.Id;
 
pool.query("UPDATE navantazhennya SET StudentsId=?,TeachersId=?,NumOfHours=?,Predmet=?,TypeZanyttya=?,Oplata=? WHERE Id=?", [StudentsId,TeachersId,NumOfHours,Predmet,TypeZanyttya,Oplata,Id], function(err, data) {
  if(err) return console.log(err);
  res.redirect("/2");
});
});

// получаем id удаляемого пользователя и удаляем его из бд
app.post("/delete2/:Id", function(req, res){
        
const Id = req.params.Id;
pool.query("DELETE FROM navantazhennya WHERE Id=?", [Id], function(err, data) {
  if(err) return console.log(err);
  res.redirect("/2");
});
});


app.listen(3000, function(){
  console.log("Сервер ожидает подключения...");
});