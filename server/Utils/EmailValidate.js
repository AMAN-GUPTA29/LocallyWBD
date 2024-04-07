const Joi = require("joi");

const validate = (data) => {
	console.log(data);
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
	});
	return schema.validate(data);
};

module.exports = {validate}