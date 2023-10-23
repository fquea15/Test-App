const Producto = require('../models/Producto');

exports.mostrarProductos = (req, res) => {
  Producto.find({}, (err, productos) => {
    if (err) {
      console.error(err);
    } else {
      res.render('index', { productos });
    }
  });
};

exports.agregarProducto = (req, res) => {
  const { nombre, precio } = req.body;
  const producto = new Producto({ nombre, precio });
  producto.save((err) => {
    if (err) {
      console.error(err);
    } else {
      res.redirect('/');
    }
  });
};
