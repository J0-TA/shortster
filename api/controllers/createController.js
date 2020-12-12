import sid from "../middleware/shortcode";
import validator from "../middleware/validator";
import Url from "../models/url";
import logger from "../config/winstonlog";

class PostLink {
  static async index(req, res) {
    try {
      res.status(200).send({
        status: "success",
        message: "Welcome to Shortster",
      });
      logger.info("Index page visited");
    } catch (err) {
      res.status(500).send(err);
      logger.warn(`Error: ${err}`);
    }
    return true;
  }

  static async createLink(req, res) {
    // validate param
    const { error } = validator.allInputValidator(req.body);
    if (error) {
      return res
        .status(400)
        .send(`${error.details[0].message}`);
    }

    // extract arguments from request
    const { url, shortcode } = req.body;
    // validate user shortcode for letters and numbers only
    if (shortcode && !validator.shortcodeValidator(shortcode)) {
      return res.status(400).send({
        status: "error",
        error:
          "Please enter a valid shortcode consisting of only letters and numbers",
      });
    }

    // Check if shortcode already exists
    const result = await Url.findOne({ shortcode });
    if (result && shortcode) {
      return res.status(400).send({
        status: "error",
        error:
          "Short code already exists. Please choose another shortcode or leave input empty for automatic shortcode",
      });
    }

    try {
      const newShortCode = new Url();
      if (!shortcode) {
        newShortCode.shortcode = sid();
      } else {
        newShortCode.shortcode = shortcode;
      }
      newShortCode.url = url;
      newShortCode.clicks = 0;
      const info = await newShortCode.save();
      res.status(200).send({
        status: "success",
        message: {
          info,
        },
      });
      logger.info("created new shortcode");
    } catch (err) {
      res.status(500).send(err);
      logger.warn(`Error creating shortcode: ${err}`);
    }
    return true;
  }
}

export default PostLink;
