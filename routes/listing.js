const express = require("express");
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLogedIn,isOwner,validateListing}= require("../middleware.js");
const listingController=require("../controllers/listings.js");
const multer  = require('multer');
const {storage}=require("../cloudConfig.js");
const upload = multer({ storage });


router.route("/")
  .get(wrapAsync(listingController.index))
  .post(   
    isLogedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing)
    );
  

 //new  
router.get("/new",isLogedIn,
   listingController.renderNewForm);

router.route("/:id")
  .get(wrapAsync(listingController.showListing)
  )
  .put(
     isLogedIn,
     isOwner,
     upload.single("listing[image]"),
     validateListing,
     wrapAsync(listingController.updateListing)
    )
  .delete(
      isLogedIn,
      isOwner,
      wrapAsync(listingController.deleteListing));


// EDIT - Form to edit a listing
router.get("/:id/edit",
  isLogedIn,
  isOwner,
  wrapAsync(listingController.editListing)
);


  module.exports=router;