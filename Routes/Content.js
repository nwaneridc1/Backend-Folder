const express = require("express");
const {getAllContents, postContents, getsingleContent, UpdateContent, DeleteContent} = require("../Controllers/Content");

const router = express.Router();
router.get("/",getAllContents);
router.post("/create",postContents);
router.get("/:id",getsingleContent);
router.put("/create/:id",UpdateContent);
router.delete("/create/:id",DeleteContent);
module.exports = router;