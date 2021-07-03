const express = require('express');
const mongoose = require('mongoose');
const FoodRoutes = require('./routes/FoodRoutes');


const app = express();


const dbURI = "mongodb+srv://Eman:test123@cluster0.3pqa5.mongodb.net/Kitchen";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));





app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));



app.get('/', (req, res) => { 
  res.render('Home' ,{title:'Home'});
});



app.use('/Kitchen', FoodRoutes);


app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});