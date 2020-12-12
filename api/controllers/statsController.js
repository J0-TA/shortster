import Url from "../models/url";
import logger from "../config/winstonlog";

class GetStats {
  static async linkStats(req, res) {
    // POST request to send the number of clicks
    const { shortcode } = req.params;
    const instance = await Url.findOne({ shortcode });
    if (!instance) {
      return res.status(400).send({
        status: "error",
        message: "Please use a valid shortcode",
      });
    }

    try {
      res.status(200).send({
        status: "success",
        message: {
          shortcode: instance.shortcode,
          clicks: instance.clicks,
          lastAccessed: instance.lastAccessed,
          registeredOn: instance.registeredOn,
        },
      });
      logger.info(`success displaying /${shortcode} stats`);
    } catch (err) {
      res.status(500).send(err);
      logger.warn(`Error getting shortcode stats: ${err}`);
    }

    return true;
  }
}

export default GetStats;
