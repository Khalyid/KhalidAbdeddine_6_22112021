const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Khalid:khaled@cluster0.45tlp.mongodb.net/Cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.post('/api/sauces', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
  });

app.use('/api/sauces', (req, res, next) => {
    const sauces = [
      {
        userId: 'oeihfzeoi',
        name: 'Mon premier objet',
        manufacturer : 'fabricant de la sauce',
        description: 'Les infos de mon premier objet',
        mainPepper : 'String — le principal ingrédient épicé de la sauce' ,
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        heat : 'Number — nombre entre 1 et 10 décrivant la sauce' ,
        likes : 'Number — nombre d utilisateurs qui aiment (= likent) la sauce',
        dislikes : 'Number — nombre d utilisateurs qui n aiment pas (= dislike) la sauce',
        usersLiked :'tableau des identifiants des utilisateurs qui ont aimé la sauce',
        usersDisliked : 'tableau des identifiants des utilisateurs qui n ont pas aimé la sauce' ,
      },
      {
        userId: 'oeihfzeoi',
        name: 'Mon premier objet',
        manufacturer : 'fabricant de la sauce',
        description: 'Les infos de mon premier objet',
        mainPepper : 'String — le principal ingrédient épicé de la sauce' ,
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        heat : 'Number — nombre entre 1 et 10 décrivant la sauce' ,
        likes : 'Number — nombre d utilisateurs qui aiment (= likent) la sauce',
        dislikes : 'Number — nombre d utilisateurs qui n aiment pas (= dislike) la sauce',
        usersLiked :'tableau des identifiants des utilisateurs qui ont aimé la sauce',
        usersDisliked : 'tableau des identifiants des utilisateurs qui n ont pas aimé la sauce' ,
      },
    ];
    res.status(200).json(sauces);
  });

module.exports = app;