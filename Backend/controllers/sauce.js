const Sauce = require('../models/Sauce');
const fs = require('fs');


exports.createSauce = (req, res, next) => {
    const sauceContent = JSON.parse(req.body.sauce);
    delete sauceContent._id;
    const sauce = new Sauce({
        ...sauceContent,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    
    /*console.log(sauce);*/
    sauce.save()
        .then(() => res.status(201).json({ message: 'Sauce enregistrée !'}))
        .catch(error => res.status(400).json({ error }));
};

exports.modifySauce = (req, res, next) => {
    const sauceContent = req.file ?
        { 
            ...JSON.parse(req.body.sauce),
            imageURL: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body};
    Sauce.updateOne({ _id: req.params.id }, { ...sauceContent, _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Sauce modifié !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id})
        .then(sauce => {
            const filename = sauce.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Sauce.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
                    .catch(error => res.status(400).json({ error }));
            });
        })
        .catch(error => res.status(500).json({error}));
    
};

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({ _id: req.params.id })
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllSauce = (req, res, next) => {
    Sauce.find()
    .then(sauces => res.status(200).json(sauces))
    .catch(error => res.status(400).json({ error }));
};

exports.likeOrNot = (req, res, next) => {
    const userLike = req.body.like;
    const userId = req.body.userId;
  
    Sauce.findOne({ _id: req.params.id })
    .then((sauce) => {
      const usersLiked = sauce.usersLiked
      const usersDisliked = sauce.usersDisliked
      
      
  
      //si 0
      if (userLike == 0) {
        //où est l'utisisateur?
        const foundUserLiked = usersLiked.find(usersId => usersId == userId);
        const foundUserDisliked = usersDisliked.find(usersId => usersId == userId);
  
        //si dans liked
        if (foundUserLiked) {
          //suppression dans Usersliked et -1 dans likes
          Sauce.updateOne({ _id: req.params.id },
          { $pull: { usersLiked: userId }, $inc : {likes: -1}})
          .then(() => res.status(200).json({ message: "L'utilisateur n'aime plus"}))
          .catch(error => res.status(400).json({ error }));
  
        //si dans disliked
        } else if (foundUserDisliked){
          //suppression dans Usersdisliked et -1 dans dislikes
          Sauce.updateOne({ _id: req.params.id },
          { $pull: { usersDisliked: userId }, $inc : {dislikes: -1}})
          .then(() => res.status(200).json({ message: "L'utilisateur ne déteste plus"}))
          .catch(error => res.status(400).json({ error }));
        }
  
      //si 1
      }else if (userLike == 1) {
        //ajout dans Usersliked et +1 dans likes
        Sauce.updateOne({ _id: req.params.id },
        { $push: { usersLiked: userId }, $inc : {likes: 1}})
        .then(() => res.status(200).json({ message: "L'utilisateur aime"}))
        .catch(error => res.status(400).json({ error }));
  
      //si -1
      } else if (userLike == -1){
        //ajout dans Usersdisliked et +1 dans dislikes
        Sauce.updateOne({ _id: req.params.id },
        { $push: { usersDisliked: userId }, $inc : {dislikes: 1}})
        .then(() => res.status(200).json({ message: "L'utilisateur n'aime pas"}))
        .catch(error => res.status(400).json({ error }));
      }
      console.log(sauce);
    })
    .catch((error) => {res.status(404).json({error: error})});
    
  };
  