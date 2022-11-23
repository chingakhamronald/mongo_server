const Seller = require("../../schema/sellerSechema");

module.exports.Get = async (req, res) => {
  try {
    const sellers = await Seller.find();
    res.json(sellers);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.GetById = async (req, res) => {
  const id = req.params.id;
  try {
    const seller = await Seller.findById(id);
    res.json(seller);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.Post = async (req, res) => {
  const sellerData = new Seller({
    order_id: req.body.order_id,
    seller_name: req.body.seller_name,
    seller_address: req.body.seller_address,
    phone_no: req.body.phone_no,
  });
  try {
    const seller = await sellerData.save();
    res.json(seller);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.Update = async (req, res) => {
  const id = req.params.id;

  const sellerData = {
    order_id: req.body.order_id,
    seller_name: req.body.seller_name,
    seller_address: req.body.seller_address,
    phone_no: req.body.phone_no,
  };

  try {
    await Seller.findByIdAndUpdate(id, { $set: sellerData });
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports.Delete = async (req, res) => {
  const id = req.params.id;
  try {
    await Seller.findByIdAndRemove(id);
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
