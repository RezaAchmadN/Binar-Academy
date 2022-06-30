const { Router } = require('express');
const controller = require('../controller/car');

const MulterStorage = require('../service/multer');

const route = Router();
const upload = MulterStorage('car');

exports.carRoute = (app) => {
  // prefix
  app.use('/car', route);

  // controller
  route.get('/', controller.index);
  route.post('/', upload.single('picture'),controller.create);
  route.delete('/:id',controller.delete);
  route.put('/:id', upload.single('picture'),controller.update);
};
