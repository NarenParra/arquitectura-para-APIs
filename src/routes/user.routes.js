const { Router } = require("express");
const { AuthMiddleware } = require("../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();
  //colocamos los middlewares despues de la ruta
  router.get("/:userid", [AuthMiddleware], UserController.get);
  router.get("/", [AuthMiddleware], UserController.getAll);
  router.patch("/:userid", UserController.update);
  router.delete("/:userid", UserController.delete);

  return router;
};
