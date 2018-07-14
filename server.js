//======================================================
//IMPORT MODULES
//======================================================
const   express         = require("express"),
        app             = express(),
        path            = require("path"),
        bodyParser      = require("body-parser"),
        mongoose        = require("mongoose"),
        helmet          = require("helmet"),
        compression     = require('compression');

//======================================================
//IMPORT ROUTES
//======================================================
const   apiProducts = require("./server/routes/apiProducts"),
        apiUser = require("./server/routes/apiUser"),
        apiMerchant = require("./server/routes/apiMerchant");

//======================================================
//CONNECT APPJS TO MONGODB DATABASE
//======================================================
mongoose.connect("mongodb://localhost/shopland");

//======================================================
//UTILIZE IMPORTED FUNCTIONS
//======================================================
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, "dist")));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

//======================================================
//PASSPORTJS CONFIGURATION
//======================================================


//======================================================
//UTILIZING ROUTES
//======================================================
app.use("/api/products", apiProducts);
app.use("/api/user", apiUser);
app.use("/api/merchant", apiMerchant);
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

//======================================================
//INITIATE NODEJS TO START LISTENING REQUEST
//======================================================
app.listen(process.env.PORT, process.env.IP);
