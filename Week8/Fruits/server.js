const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const Fruit = require('./models/Fruit');
const Veggie = require('./models/Veggie');
const methodOverride = require('method-override');

// -------------------------
// Mongoose Connection Stuff
// -------------------------

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.once('open', ()=> {
  console.log('connected to mongo');
});

// -------------------------
// Setting Up View Engine
// -------------------------

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// -------------------------
// Setting Up Body Parser
// -------------------------

app.use(express.urlencoded({extended:false}));

// -------------------------
// Method Override
// -------------------------

app.use(methodOverride('_method'));

// -------------------------
// Fruit Routes
// -------------------------

// Index

app.get('/fruits', (req, res) => {
  Fruit.find({}, (error, allFruits) => {
    res.render('fruits/Index', {
      fruits: allFruits
    });
  })
});

// New

app.get('/fruits/new', (req, res) => {
  res.render('fruits/New');
});

// Create

app.post('/fruits', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Fruit.create(req.body, (error, createdFruit) => {
    res.redirect('/fruits')
  })
});

// Delete

app.delete('/fruits/:id', (req, res) => {
  Fruit.deleteOne({
    _id: req.params.id
  }, (error, data) => {
    console.log(data);
    res.redirect('/fruits');
  })
});

// Update

app.put('/fruits/:id', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  Fruit.updateOne({
    _id: req.params.id
  }, req.body, (error, data) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      });
    } else {
      res.redirect(`/fruits/$req.params.id`);
    }
  });
});

// Edit

app.get('/fruits/:id/edit', (req, res) => {
  Fruit.findOne({
    _id: req.params.id
  }, (error, foundFruit) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      })
    } else {
      res.render('fruits/Edit', { fruit: foundFruit });
    }
  })
});

// Show

app.get('/fruits/:id', (req, res) => {
  Fruit.findOne({ _id: req.params.id }, (error, foundFruit) => {
    res.render('fruits/Show', {
      fruit: foundFruit
    });
  });
});

// -------------------------
// Veggies Routes
// -------------------------

// Index
// Add a Veggie.find to find all of the veggies and pass that to your res.render

app.get('/veggyies', (req, res) => {
  Veggie.find({}, (error, allVeggies) => {
    res.render('veggyies/Index', {
      veggyies: allVeggies
    });
  })
});

// New

app.get('/veggyies/new', (req, res) => {
  res.render('veggyies/New');
});

// Create

app.post('/veggyies', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  Veggie.create(req.body, (error, createdVeggie) => {
    res.redirect('/veggyies')
  })
});

// Delete

app.delete('/veggyies/:id', (req, res) => {
  Veggie.deleteOne({
    _id: req.params.id
  }, (error, data) => {
    console.log(data);
    res.redirect('/veggyies');
  })
});

// Update

app.put('/veggyies/:id', (req, res) => {
  if (req.body.readyToEat === 'on') {
    req.body.readyToEat = true
  } else {
    req.body.readyToEat = false
  }
  Veggie.updateOne({
    _id: req.params.id
  }, req.body, (error, data) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      });
    } else {
      res.redirect(`/veggyies/$req.params.id`);
    }
  });
});

// Edit

app.get('/veggyies/:id/edit', (req, res) => {
  Veggie.findOne({
    _id: req.params.id
  }, (error, foundVeggie) => {
    if (error) {
      console.error(error);
      res.json({
        error: error
      })
    } else {
      res.render('veggyies/Edit', { veggie: foundVeggie });
    }
  })
});

// Show

app.get('/veggyies/:id', (req, res) => {
  Veggie.findOne({ _id: req.params.id }, (error, foundVeggie) => {
    res.render('veggies/Show', {
      veggie: foundVeggie
    });
  });
});

// -------------------------
// App Is Listening Thing
// -------------------------

app.listen(3000, () => {
  console.log('listening on port 3000');
});