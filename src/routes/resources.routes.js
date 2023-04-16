const { Router } = require("express");
const {
  showAllItems,
  uploadItems,
  updateResourceStatus,
} = require("../controller/Resources.controller");
const validateResourceCreate = require("../validators/Resources");
const isAuth = require("../middleware/session");
const resourcesRoute = Router();

resourcesRoute.get("/gallery/show", showAllItems);
resourcesRoute.post("/gallery/upload", uploadItems);
resourcesRoute.put(
  "/gallery/:id",
  validateResourceCreate,
  updateResourceStatus
);

module.exports = resourcesRoute;
