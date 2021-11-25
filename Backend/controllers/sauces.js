const Sauces = require('../models/Sauces');


exports.createSauces = (req, res, next) => {
    const saucesObject = JSON.parse(req.body.sauces); //parse le nouvel objet 
    delete saucesObject._id;
      const sauces = new Sauces({ //nouvelle sauce construite avec le nouvel objet dans le corps de la requete
        ...saucesObject,
   
  });
  sauces.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
      .catch(error => res.status(400).json({ error }));
};

exports.modifySauces = (req, res, next) => {
  const sauces = new Sauces({
    userId: req.body.userId,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    manufacturer: req.body.manufacturer,
    mainPepper: req.body.mainPepper,
    imageUrl: req.body.imageUrl,
    heat: req.body.heat,
    price: req.body.price
  });
  Sauces.updateOne({_id: req.params.id}, sauces).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneSauces = (req, res, next) => {
  Sauces.findOne({
    _id: req.params.id
  }).then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};


exports.deleteSauces = (req, res, next) => {
  Sauces.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllSauces = (req, res, next) => {
  Sauces.find().then(
    (sauces) => {
      res.status(200).json(sauces);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

