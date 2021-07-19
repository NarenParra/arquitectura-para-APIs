const mcahce = require("memory-cache");
const { CACHE_KEY } = require("../config");

module.exports = function (duration) {
  return (req, res, next) => {
    const key = CACHE_KEY + (req.originUrl || req.basenUrl + req.url);
    const cachedBody = mcahce.get(key);

    if (cachedBody) {
      return res.send(JSON.parse(cachedBody));
    } else {
      res.senResponse = res.send;
      res.send = (body) => {
        mcahce.put(key, body, duration * 100);
        res.senResponse(body);
      };
      next();
    }
  };
};
