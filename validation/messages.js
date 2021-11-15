const Validator = require("validator");
const validText = require("./valid-text")

module.exports = function validateMessageInput(data) {
    let errors = {};

    data.body = validText(data.body) ? data.body : '';

    if (!Validator.isLength(data.body, {min: 1, max: 150})){
        errors.text = "Messages must be less than 150 characters";
    }

    if (Validator.isEmpty(data.body)) {
        errors.text = "Messages may not be blank"
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}