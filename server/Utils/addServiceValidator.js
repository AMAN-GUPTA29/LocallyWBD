const Joi = require("joi");

const validate = (data) => {
	console.log(data);
	const schema = Joi.object({
		title: Joi.string().required().label("Title"),
		tag: Joi.string().required().label("Tag"),
        charge: Joi.string().required().label("Charge"),
		description: Joi.string().required().label("Description"),
	});
	return schema.validate(data);
};

module.exports = {validate}