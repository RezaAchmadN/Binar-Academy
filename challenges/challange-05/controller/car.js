
const CarModel = require('../model/car');

exports.create = async (req, res) => {
  try {
    const car = new CarModel({ ...req.body, picture: req.file.filename });
    await car.save();

    return res.status(200).send({ message: 'car added!', car });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

exports.index = async (req, res) => {
  try {
    const cars = await CarModel.find();

    return res.status(200).send({ cars });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

exports.delete = async (req, res) => {
  try {
    const cars = await CarModel.findByIdAndDelete(req.params.id);

    return res.status(200).send({ cars });
  } catch (error) {
    return res.status(400).send({ error });
  }
};

exports.update = async (req, res) => {
  try {
    const updateBody = req.file?.filename ? {...req.body, picture: req.file.filename } : req.body 
    const cars = await CarModel.findByIdAndUpdate(req.params.id, updateBody);

    return res.status(200).send({ cars });
  } catch (error) {
    return res.status(400).send({ error });
  }
};