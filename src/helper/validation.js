const joi = require("joi");

const transaction = joi.object({
  email: joi
    .string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }),
  amount: joi.number().min(1),
});

module.exports = { transaction };
