const router = require("express").Router();
const Controller = require("./controller");

router.get("", Controller.Get);
router.get("/getById/:id", Controller.GetById);
router.post("/addUser", Controller.Post);
router.patch("/updateUser/:id", Controller.Update);
router.delete("/deleteUser/:id", Controller.Delete);

module.exports = router;
