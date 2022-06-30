const moment = require('moment');
const { model, Schema } = require('mongoose');
const { getImageUrl, setPicture } = require('../helper/picture');

const CarSchema = new Schema(
  {
    name: {
      type: String,
      default: null,
      required: true
    },
    price: {
      type: Number,
      default: null,
      required: true,
      get: function (value) {
        const formatter = new Intl.NumberFormat('en-ID', {
          style: 'currency',
          currency: 'IDR'
        }).format(value)
          .replace(/[IDR]/gi, '')
          .replace(/(\.+\d{2})/, '')
          .trimLeft();
        return `Rp ${formatter}`;
      }
    },
    size: {
      type: String,
      default: null,
      required: true,
    },
    picture: {
      type: String,
      default: 'null',
      required: true,
      get: getImageUrl,
      set: function (picture) {
        return setPicture(this.picture, picture, 'car');
      },
    },
    createdAt: {
      type: Date,
      get: function (date) {
        return moment(date).format('D MMMM YYYY, HH:MM');
      }
    }
  },
  {
    timestamps: true,
    versionKey: false,
    toJSON: { getters: true },
    toObject: { getters: true },
  }
);

module.exports = model('CarModel', CarSchema, 'car');
