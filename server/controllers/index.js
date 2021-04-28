const Food = require('../models/FoodAPI')

//GET '/api/v1/getAll
const getAll = (req, res, next) => {

    Food.find({}, (err, data) => {
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    });
}

//GET '/api/v1/locations'
const getLocations = (req, res, next) => {
    let LatLng = req.params.latlng.split(',')
    let lat = LatLng[0]
    let lng = LatLng[1]
    Food.find({"Latitude" : { $regex: '.*' + lat + '.*' }, "Longitude" : { $regex: '.*' + lng + '.*' } } ,'Applicant FacilityType FoodItems LocationDescription Address' , (err, data) => {
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    }); 
};

//GET '/api/v1/address'
const getAddress = (req, res, next) => {
    var address = req.params.locality
    Food.find({"Address" : { $regex: '.*' + address + '.*' }},'Applicant FacilityType FoodItems LocationDescription Address', (err, data) => {
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    }); 
};

//GET '/api/v1/pincode'
const getPincode = (req, res, next) => {
    var pincode = req.params.pincode
    Food.find({"Zip Codes" : pincode},'Applicant FacilityType FoodItems LocationDescription Address', (err, data) => {
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    });

    
};
//GET '/api/v1/fooditem'
const getFoodItem = (req, res, next) => {
    var fooditem = req.params.fooditem
    Food.find({"FoodItems" : { $regex: '.*' + fooditem + '.*' }},'Applicant FacilityType FoodItems LocationDescription Address', (err, data) => {
        if (err){
            return res.json({Error: err});
        }
        return res.json(data);
    });
};


//export controller functions
module.exports = {
    getAll,
    getLocations, 
    getAddress,
    getFoodItem,
    getPincode,
};
