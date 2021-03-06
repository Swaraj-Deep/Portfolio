const express = require("express");
const router = express.Router();

router.get("/experience", (req, res, next) => {
  res.status(200).json({
    summary: "Motivated Software Developer ready to learn new things",
  });
});

router.post("/experience", (req, res, next) => {
  res.status(201).json({
    message: "Resource Created",
  });
});

router.patch("/experience", (req, res, next) => {
  res.status(201).json({
    message: "Resource Updated",
  });
});

router.delete("/experience", (req, res, next) => {
  res.status(201).json({
    message: "Resource Deleted",
  });
});

module.exports = router;
