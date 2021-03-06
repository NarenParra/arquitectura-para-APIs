const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config
const config = require("../config");
const app = require(".");
//services
const { HomeService, UserService, AuthService } = require("../services");
//controllers
const {
  HomeController,
  UserController,
  AuthController,
} = require("../controllers");
//routes
const {
  HomeRoutes,
  UserRoutes,
  AuthRoutes,
} = require("../routes/index.routes");
const Routes = require("../routes/index");
//models
const { User } = require("../models");
//repositories
const { UserRepository } = require("../repositories");

const container = createContainer();

//injection of class
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    UserService: asClass(UserService).singleton(),
    AuthService: asClass(AuthService).singleton(),
  })
  .register({
    //el metodo .bind mantiene el scope de la funcion
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    AuthController: asClass(AuthController.bind(AuthController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
    UserRoutes: asFunction(UserRoutes).singleton(),
    AuthRoutes: asFunction(AuthRoutes).singleton(),
  })
  .register({ User: asValue(User) })
  .register({ UserRepository: asClass(UserRepository).singleton() });

module.exports = container;
