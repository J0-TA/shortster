import Url from "../models/url";
import logger from "../config/winstonlog";

class getRedirect {
  // GET request to redirect shortcode to the URL
  static async redirectLink(req, res) {
    const { shortcode } = req.params;
    if (!shortcode) {
      return res.status(400).send({
        status: "error",
        message: "Shortcode not provided",
      });
    }

    try {
      const instance = await Url.findOne({ shortcode });
      if (!instance) {
        return res.status(404).send({
          status: "error",
          message: "URL not found",
        });
      }

      instance.clicks += 1;
      instance.lastAccessed = Date.now();
      res.redirect(`${instance.url}`);
      await instance.save();
      logger.info(`/${shortcode} redirected to ${instance.url}`);
    } catch (err) {
      res.status(500).send(err);
      logger.warn(`Error redirecting to URL: ${err}`);
    }

    return true;
  }
}

export default getRedirect;
