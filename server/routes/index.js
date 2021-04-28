const express = require('express'); 
const multer = require('multer');
const upload = multer();

const router  = express.Router(); 

const foodController = require('../controllers/index');

router.get("/api/v1/getAll",foodController.getAll);
router.get("/api/v1/locations/:latlng",foodController.getLocations);
router.get("/api/v1/address/:locality",foodController.getAddress);
router.get("/api/v1/pincode/:pincode",foodController.getPincode);
router.get("/api/v1/fooditem/:fooditem",foodController.getFoodItem);


module.exports = router; // export to use in server.js
