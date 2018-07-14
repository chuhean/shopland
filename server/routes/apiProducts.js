const express     = require("express"),
      router      = express.Router(),
      Product     = require("../models/product");
      
//======================================================
//PRODUCTS SEARCH API
//======================================================
router.get("/search", (req, res) => {
   Product.find({}, (err, products) => {
        if(err){
            console.log(err);
        } else {
            res.send({
               id: products._id,
               image: products.image,
               title: products.title,
               price: products.price,
               merchant: products.merchant
            })
        }
    });
});

router.post("/:productID", (req, res) => {
    //Find post 
    Product.findById(req.params.id, function(err, foundPost){
        if(err || !foundPost){
            console.log(err);
        } else {
            //Check if user's id already in likes array
            var isInArray = foundPost.likes.some(function (like) {
                return like.equals(req.user._id);
            });
            //If user's id exists in array
            if (isInArray === true){
                //Remove user's id from array
                foundPost.likes.remove(req.user._id);
                foundPost.save(function(err){
                    if(err){
                        console.log(err);
                    } else {
                        //Send back the number of user's id in likes array
                        //res.send doesn't accept integer so convert to string
                        res.send(String(foundPost.likes.length));
                    }
                });
            } else {
                //If user's id not in array
                foundPost.likes.unshift(req.user._id);
                foundPost.save(function(err){
                    if(err){
                        console.log(err);
                    } else {
                        //Send back the number of user's id in likes array
                        //res.send doesn't accept integer so convert to string
                        res.send(String(foundPost.likes.length));
                    }
                });
            }
        }
    });
});

module.exports = router;