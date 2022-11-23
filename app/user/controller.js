const user = require("../../schema/userSechema");

module.exports.Get = async (req, res) => {
  try {
    const users = await user.find();
    res.json(users);
  } catch (err) {
    console.log(err);
  }
};

module.exports.GetById = async (req, res) => {
  const id = req.params.id;
  try {
    const singleUser = await user.findById(id);
    res.json(singleUser);
    res.status(200);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.Post = async (req, res) => {
  const userData = new user({
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
    await user.findByIdAndUpdate(id, { $set: updateData });
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.Delete = async (req, res) => {
  const id = req.params.id;
  try {
    await user.findByIdAndRemove(id);
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
