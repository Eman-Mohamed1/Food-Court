const FoodModel = require('../models/Food');

const Food_index = (req, res) => {
  FoodModel.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('index', { Food: result, title: 'All Food Items' });
    })
    .catch(err => {
      console.log(err);
    });
}

const Food_details = (req, res) => {
  const id = req.params.id;
  FoodModel.findById(id)
    .then(result => {
      res.render('details', { food: result, title: 'Food Details' });
    })
    .catch(err => {
      console.log(err);
      res.render('404', { title: 'Food not found' });
    });
}

const Food_create_get = (req, res) => {
  res.render('create', { title: 'Create a new Food Item' });
}

const Food_create_post = (req, res) => {
  const food = new FoodModel(req.body);
  food.save()
    .then(result => {
      res.redirect('/Kitchen');
    })
    .catch(err => {
      console.log(err);
    });
}

const Food_delete = (req, res) => {
  const id = req.params.id;
  FoodModel.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/Kitchen' });
    })
    .catch(err => {
      console.log(err);
    });
}


// const Food_update = (req, res) => {
//   const id = req.params.id;
//   FoodModel.findByIdAndUPDATE(id)
//     .then(result => {
//       res.json({ redirect: '/Kitchen' });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

module.exports = {
  Food_index, 
   Food_details, 
   Food_create_get, 
   Food_create_post, 
   Food_delete
}