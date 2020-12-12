import Joi from "@hapi/joi";

// User submitted Url and Shortcode
exports.allInputValidator = (param) => {
  const schema = Joi.object({
    shortcode: Joi.string().min(4).max(30),
    url: Joi.string().required().uri(),
  }).options({ abortEarly: false });
  return schema.validate(param);
};

// User submitted shortcode for numbers and letters
exports.shortcodeValidator = (params) => {
  const inputCheck = /^[0-9a-zA-Z]+$/;
  return inputCheck.exec(params);
};
