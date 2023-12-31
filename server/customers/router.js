const { create, index, show, update, destroy } = require("./controller");
const express = require("express");
const router = express.Router();
const { upload } = require("../config/upload");

router.post("/", upload.single("image"), create);
router.get("/", index);
router.get("/:customerId", show);
router.patch("/", update);
router.delete("/:customerId", destroy);

module.exports = router;
