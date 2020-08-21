const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 3080;
var cors = require('cors');
app.use(cors());
const firebase = require('firebase/app');
var firebase_app = firebase.initializeApp({ apiKey: "AIzaSyAuVFqEkbCcGxD3XkeW_fEkxLyH0d-avyU",
authDomain: "recipebook-b1d94.firebaseapp.com",
databaseURL: "https://recipebook-b1d94.firebaseio.com",
projectId: "recipebook-b1d94",
storageBucket: "recipebook-b1d94.appspot.com",
messagingSenderId: "5919620439",
appId: "1:5919620439:web:09c5714153383fc9039212",
measurementId: "G-61VEBM556C" });


var admin = require("firebase-admin");

var serviceAccount = require("C:\\Users\\Samvit Patankar\\Desktop\\Quantiphi\\Angular\\angular_node\\recipebook-b1d94-firebase-adminsdk-viuil-d207870944.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://recipebook-b1d94.firebaseio.com"
});
const db = admin.firestore();

const users = [];

app.use(bodyParser.json());

app.get('/recipe',(req,res)=>{
    const citiesRef = db.collection('recipes');
    const recipes=[];
    
    citiesRef.get().then(snapshot=>{
       snapshot.forEach(element => {
        //console.log(Object.keys(element));
        recipes[element.id]=(element.data());
       });
        res.json(recipes);

    });
    //res.send('We are here');
    

    
});


app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});