const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
    let errors = {}

    data.title = validText(data.title) ? data.title : "";
    data.category = validText(data.category) ? data.category : "";

    if(Validator.isEmpty(data.title)) {
        errors.title = "Event title is required"
    }

    // if(!Validator.isDate(data.date, { format: 'DD-MM-YYYY'})) {
    //     errors.date = 'date format DD-MM-YYYY'
    // }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}