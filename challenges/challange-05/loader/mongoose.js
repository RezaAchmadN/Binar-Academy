const mongoose = require('mongoose');

const MONGOOSE_URI = 'mongodb://127.0.0.1:27017/challange-5';

module.exports = async function () {
  try {
    await mongoose.connect(MONGOOSE_URI);
  } catch (err) {
    throw new Error(`[mongoose:error] Periksa koneksi database`);
  }
};
