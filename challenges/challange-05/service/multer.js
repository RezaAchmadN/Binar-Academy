const fs = require('fs');
const path = require('path');
const multer = require('multer');
const { v4 } = require('uuid');

const uploadPath = path.join(__dirname, '../uploads');

const storage = (entityPath = '') => {
  return multer.diskStorage({
    destination: function (_req, _file, cb) {
      const dir = path.join(uploadPath, entityPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir);

      cb(null, dir);
    },
    filename: function (_req, file, cb) {
      cb(null, `${v4() + path.extname(file.originalname)}`);
    },
  });
};

module.exports = function (entityPath = '') {
  return multer({
    storage: storage(entityPath),
  });
};
