
const Sauces = require('../models/sauces');


exports.createSauces = (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Objet créé !'
    });
}

exports.modifySauces = (req, res, next) => {
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
  }