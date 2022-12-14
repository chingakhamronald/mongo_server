const User = require("../../schema/userSechema");

module.exports.Get = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.GetById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.json(user);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.Post = async (req, res) => {
  const userData = new User({
    order_id: req.body.order_id,
    name: req.body.name,
    address: req.body.address,
  });
  try {
    const users = await userData.save();
    res.json(users);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.Update = async (req, res) => {
  const id = req.params.id;

  const updateData = {
    order_id: req.body.order_id,
    name: req.body.name,
    address: req.body.address,
  };

  try {
    await User.findByIdAndUpdate(id, { $set: updateData });
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.Delete = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndRemove(id);
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
