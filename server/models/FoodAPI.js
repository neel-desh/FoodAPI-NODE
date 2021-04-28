const mongoose = require("mongoose");
const FoodAPI = new mongoose.Schema({
    "locationid": String,
    "Applicant": String,
    "FacilityType": String,
    "LocationDescription": String,
    "Address": String,
    "FoodItems": String,
    "X": String,
    "Y": String,
    "Latitude": String,
    "Longitude": String,
    "Location": String,
    "Zip Codes": String
});

const FoodModel = mongoose.model('locations',FoodAPI)
module.exports = FoodModel