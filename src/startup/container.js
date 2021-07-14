const { createContainer, asClass, asValue, asFunction } = require("awilix");

//Config
const config = require("../config");
const app = require(".");
//services
const { HomeService } = require("../services");
//controllers
const { HomeController } = require("../controllers");
//routes
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes/index");
//models
const {User} = require("../models")
//repositories
const {UserRepository} = require("../repositories")

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
  })
  .register({
    //el metodo .bind mantiene el scope de la funcion
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({ HomeRoutes: asFunction(HomeRoutes).singleton() })
  .register({User: asValue(User)})
  .register({UserRepository: asClass(UserRepository).singleton()});

module.exports = container;
