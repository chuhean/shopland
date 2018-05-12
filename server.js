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
const   api = require("./server/routes/api");

//======================================================
//CONNECT APPJS TO MONGODB DATABASE
//======================================================


//======================================================
//UTILIZE IMPORTED FUNCTIONS
//======================================================
app.use(helmet());
app.use(compression());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended:true}));

//======================================================
//PASSPORTJS CONFIGURATION
//======================================================
// app.use(require("express-session")({
//     secret:"This is the website of the ecommerce platform Shopland.",
//     resave: false,
//     saveUninitialized: false
// }));

//======================================================
//UTILIZING ROUTES
//======================================================
app.use("/api", api);
app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist/index.html"));
});

//======================================================
//INITIATE NODEJS TO START LISTENING REQUEST
//======================================================
app.listen(process.env.PORT, process.env.IP);
