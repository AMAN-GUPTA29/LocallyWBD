const Joi = require("joi");

const validate = (data) => {
	console.log(data);
	const schema = Joi.object({
		token: Joi.string().required().label("Token"),
	});
	return schema.validate(data);
};

module.exports = {validate}