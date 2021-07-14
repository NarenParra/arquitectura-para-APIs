const { Router } = require("express");
const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware,
} = require("../middlewares");
const { CAHCE_TIME } = require("../helpers");

module.exports = function ({ UserController }) {
  const router = Router();
  //colocamos los middlewares despues de la ruta
  router.get("/:userid", [AuthMiddleware], UserController.get);
  router.get(
    "/",
    [AuthMiddleware, ParseIntMiddleware, CacheMiddleware(CAHCE_TIME.ONE_HOUR)],
    UserController.getAll
  );
  router.patch("/:userid", UserController.update);
  router.delete("/:userid", UserController.delete);

  return router;
};
