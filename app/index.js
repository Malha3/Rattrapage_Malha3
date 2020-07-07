// ---- EXPRESS JS - Framework
let express = require('express'),
    app = express();

// Gestion Fichiers Systèmes
let fs = require('fs'),
path = require('path');

// --- middleware
// - body-parser needed to catch and to treat information inside req.body
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// Gestion des pages front
let helpers 	= require('view-helpers'),
	consolidate = require('consolidate');

app.engine('html', consolidate['mustache']);
app.set('view engine', 'html');
app.set('views', __dirname + '/front');


// ------------------------
// RESSOURCES SALADES
// ------------------------
var temp = [{
	"id" : "1",
	"nom" : "Salade Grecque",
	"description" : "Une bonne salade",
    "listeIngedrients" : ["Salade", "Tomates", "Olives"],
    "photo" : "https://img.cuisineaz.com/610x610/2013-12-20/i29173-salade-grecque-minceur.jpg"
}]


// --- Connexion à la base de donnée mongo docker
let mongoose = require('mongoose');

let database  = mongoose.connect("mongodb://localhost:27017/salades",{
    promiseLibrary: require('bluebird'),
    useNewUrlParser: true
});

// --- Definition du modèle
const Schema = mongoose.Schema;

//------------------------------------------- Resources Schema
let SaladeSchema = new Schema({
    id      : String,
    nom		: String,
	description     : String,
	listeIngedrients: [String],
	image: String
});

mongoose.model('Salade', SaladeSchema);

app.get('/salades',(req, res)=>{
	let Salade = mongoose.model('Salade')
	Salade.find({}).then((result)=>{
            res.status(200).json(result)
        },(err)=>{
            res.status(400).json(err)
        })
})

app.post('/salades',(req, res)=>{
	let Salade = mongoose.model('Salade');
	let mySalade = new Salade(req.body);
	mySalade.save().then((result)=>{
            res.status(200).json(mySalade)
        },(err)=>{
            res.status(400).json(err)
        })
})

app.get('/salades/:idSalade',(req, res)=>{
	res.status(200).json(temp.pop())
})

app.put('/salades/:idSalade',(req, res)=>{
	res.status(204).json()
})

app.delete('/salades/:idSalade',(req, res)=>{
    res.status(204).json()
})

// ------------------------
// ROUTES VUES
// ------------------------
app.get('/',(req,res)=>{
    res.render('index',{message : req.query.message})
});



// ------------------------
// START SERVER
// ------------------------
app.listen(3000,function(){
    console.info('HTTP server started on port 3000');
});