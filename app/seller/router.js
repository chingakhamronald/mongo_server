const router = require("express").Router();
const Controller = require("./controller");

router.get("", Controller.Get);
router.get("/getById/:id", Controller.GetById);
router.post("/addSeller", Controller.Post);
router.patch("/updateSeller/:id", Controller.Update);
router.delete("/deleteSeller/:id", Controller.Delete);

module.exports = router;
