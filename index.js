const express = require("express");
const cors = require("cors");
const app = express();
const entrepriseRouter = require("./Routes/EntrepriseRoute");
const administrateurRouter = require("./Routes/AdministrateurRoute");
const projetRouter = require("./Routes/ProjetRoute");
const tagRouter = require("./Routes/TagRoute");
const prestationVideoRouter = require("./Routes/PrestationVideoRoute");
const prestationTypeRouter = require("./Routes/PrestationTypeRoute");
const authenticateRouter = require("./Routes/AuthenticateRoute");
const AuthenticateController = require("./Controllers/AuthenticateController");


app.use(cors());
app.use(express.json());
app.use("/auth", authenticateRouter);
app.use("/entreprises"/* , AuthenticateController.authenticateToken  */,entrepriseRouter);
app.use("/administrateurs", AuthenticateController.authenticateToken , administrateurRouter);
app.use("/projets", AuthenticateController.authenticateToken , projetRouter );
app.use("/tags", AuthenticateController.authenticateToken ,tagRouter );
app.use("/prestationsvideos", AuthenticateController.authenticateToken , prestationVideoRouter);
app.use("/prestationstypes", AuthenticateController.authenticateToken , prestationTypeRouter);



module.exports = app ; 