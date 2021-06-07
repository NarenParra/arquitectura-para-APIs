class HomeService {
  index() {
    return {
      message: "Hello World",
    };
  }
}
//se exporta asi por awilix
//de lo contrario ~ = new HomeService()
module.exports = HomeService;
