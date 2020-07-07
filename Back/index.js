// ---- EXPRESS JS - Framework
let express = require('express'),
    app = express();


// --- middleware
// - body-parser needed to catch and to treat information inside req.body
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

// ------------------------
// ROUTES RESOURCES
// ------------------------
var temp = [{
	"id" : "1",
	"nom" : "Salade Grecque",
	"description" : "Une bonne salade",
    "listeIngedrients" : ["Salade", "Tomates", "Olives"],
    "photo" : "https://img.cuisineaz.com/610x610/2013-12-20/i29173-salade-grecque-minceur.jpg"
}]


app.get('/salades',(req, res)=>{
	res.status(200).json(temp)
})

app.post('/salades',(req, res)=>{
	res.status(200).json(req.body)
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
// START SERVER
// ------------------------
app.listen(3000,function(){
    console.info('HTTP server started on port 3000');
});