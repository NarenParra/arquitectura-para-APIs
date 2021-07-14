const { Router } = require("express");
const { AuthMiddleware, ParseIntMiddleware } = require("../middlewares");

module.exports = function ({ UserController }) {
  const router = Router();
  //colocamos los middlewares despues de la ruta
  router.get("/:userid", [AuthMiddleware], UserController.get);
  router.get("/", [AuthMiddleware, ParseIntMiddleware], UserController.getAll);
  router.patch("/:userid", UserController.update);
  router.delete("/:userid", UserController.delete);

  return router;
};
