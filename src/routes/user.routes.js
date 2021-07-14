const { Router } = require("express");

module.exports = function ({ UserController }) {
  const router = Router();

  router.get("/:userid", UserController.get);
  router.get("/", UserController.getAll);
  router.patch("/:userid", UserController.update);
  router.delete("/:userid", UserController.delete);

  return router;
};
