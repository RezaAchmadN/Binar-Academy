const path = require('path');
const fs = require('fs');

/**
 * Fungsi untuk set picture yang baru
 * @param {string} oldPath path sebelumnya (diambil dari database)
 * @param {string} newPath path baru (dari multer)
 * @param {string} entity nama model
 */
exports.setPicture = (oldPath, newPath, entity) => {
  console.debug(`menyimpan alamat gambar ${newPath} pada ${entity}`);

  this.removePicture(oldPath);

  return !!newPath ? `/${entity}/${newPath}` : '';
};

/**
 * Fungsi bantuan untuk menghapus file/gambar
 * @param {string} imagePath path dari gambar yang ada di model
 */
exports.removePicture = (filePath = '') => {
  if (!filePath) return;

  console.debug('menghapus file: ' + filePath);
  filePath = String(filePath).replace(process.env.APP_URL + '/static/', '');

  const cekFilePath = path.join(__dirname, '../uploads', filePath);

  if (fs.existsSync(cekFilePath)) fs.unlinkSync(cekFilePath);
  else console.debug('file tidak ditemukan: ' + filePath);
};

/**
 * Getter untuk atribut image untuk mongoose schema
 * @param {string} imagePath path tempat image disimpan
 */
exports.getImageUrl = (imagePath) => {
  const staticPath = 'http://localhost:3001/static/' + imagePath;
  if (!!imagePath) return staticPath.replace(/([^:])(\/\/+)/g, '$1/');
  return ``;
};

