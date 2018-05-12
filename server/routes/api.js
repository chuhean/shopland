const express     = require("express"),
      router      = express.Router();
      
//======================================================
//LANDING, LOGIN, SIGN UP ROUTES
//======================================================
router.get("/", (req, res) => {
   res.send("api works"); 
});

module.exports = router;