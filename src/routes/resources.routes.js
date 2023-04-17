const { Router } = require("express");
const {
  showAllItems,
  uploadItems,
  updateResourceStatus,
  resourceById,
} = require("../controller/Resources.controller");
const validateResourceCreate = require("../validators/Resources");
const validateItem = require("../validators/general");
const isAuth = require("../middleware/session");
const resourcesRoute = Router();

resourcesRoute.get("/gallery/show", showAllItems);
resourcesRoute.get("/gallery/:id", resourceById);
resourcesRoute.post("/gallery/upload", uploadItems);
resourcesRoute.put(
  "/gallery/:id",
  validateItem,
  validateResourceCreate,
  updateResourceStatus
);

module.exports = resourcesRoute;
