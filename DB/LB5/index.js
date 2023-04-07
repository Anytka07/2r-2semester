//////////////////////////////////////
const express = require("express");
const jsonParser = express.json();
const app = express();
const objectId = require("mongodb").ObjectId;

const MongoClient = require("mongodb").MongoClient;

////////////////////////////////////////////////////////////////////

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");
  
app.use(express.static(`${__dirname}/public`));

(async () => {
 
    try{
        await mongoClient.connect();
        app.locals.collection = mongoClient.db("lab3").collection("teachers");
        app.locals.collection2 = mongoClient.db("lab3").collection("students");
        app.locals.collection3 = mongoClient.db("lab3").collection("navantazhennya");
        app.listen(3000);
        console.log("Сервер ожидает подключения...");
    }
    catch(error) {
        return console.log(error);
    }
})(); 

app.get("/api/teachers", async (req, res)=>{
    // получаем всех пользователей
    const collection = req.app.locals.collection;
    try {
        const teachers = await collection.find({}).toArray();
        res.send(teachers);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
   
});
  
app.get("/api/teachers/:id", async(req, res)=>{
    const collection = req.app.locals.collection;
    try {
        const id = new objectId(req.params.id);
    // получаем одного пользователя по id
    const teacher = await collection.findOne({_id: id});
    if(teacher) res.send(teacher);
    else res.sendStatus(404);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    
});
     
app.post("/api/teachers", jsonParser, async (req, res) =>{
         
    if(!req.body) return res.sendStatus(400);
         
    const teacherSurname = req.body.surname;
    const teacherName = req.body.name;
    const teacherTelephone = req.body.telephone;
    const teacherStage = req.body.stage;
    const teacher = {
        surname: teacherSurname,
        name: teacherName,
        telephone: teacherTelephone, 
        stage: teacherStage
    };

    const collection = req.app.locals.collection;
    try {
    

       await collection.insertOne(teacher);
       res.send(teacher);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    // сохраняем в бд
});
      
app.delete("/api/teachers/:id", async(req, res)=>{

    const collection = req.app.locals.collection;

    try {
        const id = new objectId(req.params.id);
        const result = await collection.findOneAndDelete({_id: id});
        const teacher = result.value;

        if(teacher) res.send(teacher);
        else res.sendStatus(404);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});
     
app.put("/api/teachers", jsonParser, async (req, res)=>{
          
    if(!req.body) return res.sendStatus(400);
    const teacherSurname = req.body.surname;
    const teacherName = req.body.name;
    const teacherTelephone = req.body.telephone;
    const teacherStage = req.body.stage;

    const collection = req.app.locals.collection;

    try {
        const id = new objectId(req.body.id);
        const result = await collection.findOneAndUpdate({_id: id}, {$set: {surname: teacherSurname, name: teacherName, telephone: teacherTelephone, stage: teacherStage}},{returnDocument: "after"}); 
        const teacher = result.value;
        if(teacher) res.send(teacher);
        else res.sendStatus(404);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
     // обновляем данные пользователя по id
});

// Students

app.get("/api/students", async (req, res)=>{
    // получаем всех пользователей
    const collection2 = req.app.locals.collection2;
    try {
        const students = await collection2.find({}).toArray();
        res.send(students);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
   
});
  
app.get("/api/students/:id", async(req, res)=>{
    const collection2 = req.app.locals.collection2;
    try {
        const id = new objectId(req.params.id);
    // получаем одного пользователя по id
    const student = await collection2.findOne({_id: id});
    if(student) res.send(student);
    else res.sendStatus(404);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    
});
     
app.post("/api/students", jsonParser, async (req, res) =>{
         
    if(!req.body) return res.sendStatus(400);
         
    const studentSpecial = req.body.special;
    const studentViddilenya = req.body.viddilenya;
    const studentNumberOfStudent = req.body.numberOfStudent;
    const student = ({
        special: studentSpecial,
        viddilenya: studentViddilenya,
        numberOfStudent: studentNumberOfStudent
    });

    const collection2 = req.app.locals.collection2;
    try {
    

       await collection2.insertOne(student);
       res.send(student);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    // сохраняем в бд
});
      
app.delete("/api/students/:id", async(req, res)=>{

    const collection2 = req.app.locals.collection2;

    try {
        const id = new objectId(req.params.id);
        const result = await collection2.findOneAndDelete({_id: id});
        const student = result.value;

        if(student) res.send(student);
        else res.sendStatus(404);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});
     
app.put("/api/students", jsonParser, async (req, res)=>{
          
    if(!req.body) return res.sendStatus(400);
    const studentSpecial = req.body.special;
    const studentViddilenya = req.body.viddilenya;
    const studentNumberOfStudent = req.body.numberOfStudent;

    const collection2 = req.app.locals.collection2;

    try {
        const id = new objectId(req.body.id);
        const result = await collection2.findOneAndUpdate({_id: id}, {$set: {special: studentSpecial, viddilenya: studentViddilenya, numberOfStudent: studentNumberOfStudent}},{returnDocument: "after"}); 
        const student = result.value;
        if(student) res.send(student);
        else res.sendStatus(404);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
     // обновляем данные пользователя по id
});


// Navantazhennya

app.get("/api/navantazhennya", async (req, res)=>{
    // получаем всех пользователей
    const collection3 = req.app.locals.collection3;
    try {
        const hours = await collection3.find({}).toArray();
        res.send(hours);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
   
});
  
app.get("/api/navantazhennya/:id", async(req, res)=>{
    const collection3 = req.app.locals.collection3;
    try {
        const id = new objectId(req.params.id);
    // получаем одного пользователя по id
    const hour = await collection3.findOne({_id: id});
    if(hour) res.send(hour);
    else res.sendStatus(404);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    
});
     
app.post("/api/navantazhennya", jsonParser, async (req, res) =>{
         
    if(!req.body) return res.sendStatus(400);
         
    const hourNumber = req.body.number;
    const hourPredmet = req.body.predmet;
    const hourType = req.body.type;
    const hour = ({
        number: hourNumber,
        predmet: hourPredmet,
        type: hourType
    });

    const collection3 = req.app.locals.collection3;
    try {
    

       await collection3.insertOne(hour);
       res.send(hour);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
    // сохраняем в бд
});
      
app.delete("/api/navantazhennya/:id", async(req, res)=>{

    const collection3 = req.app.locals.collection3;

    try {
        const id = new objectId(req.params.id);
        const result = await collection3.findOneAndDelete({_id: id});
        const hour = result.value;

        if(hour) res.send(hour);
        else res.sendStatus(404);

    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

});
     
app.put("/api/navantazhennya", jsonParser, async (req, res)=>{
          
    if(!req.body) return res.sendStatus(400);
    const hourNumber = req.body.number;
    const hourPredmet = req.body.predmet;
    const hourType = req.body.type;

    const collection3 = req.app.locals.collection3;

    try {
        const id = new objectId(req.body.id);
        const result = await collection3.findOneAndUpdate({_id: id}, {$set: {number: hourNumber, predmet: hourPredmet, type: hourType}},{returnDocument: "after"}); 
        const hour = result.value;
        if(hour) res.send(hour);
        else res.sendStatus(404);
        
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
     // обновляем данные пользователя по id
});


// прослушиваем прерывание работы программы (ctrl-c)
process.on("SIGINT", async() => {
      
    await mongoClient.close();
    console.log("Приложение завершило работу");
    process.exit();
});


