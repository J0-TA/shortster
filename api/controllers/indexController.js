import logger from "../config/winstonlog";

class GetIndex {
  static async index(req, res) {
    try {
      res.status(200).send({
        status: "success",
        message: "Shortster | URL shortening service",
      });
      logger.info("Index page visited");
    } catch (err) {
      res.status(500).send(err);
      logger.warn(`Error: ${err}`);
    }
    return true;
  }
}

export default GetIndex;
