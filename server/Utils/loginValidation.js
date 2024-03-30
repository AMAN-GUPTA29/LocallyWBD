const Joi = require("joi");

const validate = (data) => {
	console.log(data);
	const schema = Joi.object({
		email: Joi.string().email().required().label("Email"),
		password: Joi.string().required().label("Password"),
	});
	console.log("hii");
	return schema.validate(data);
};

module.exports = {validate}