const express = require("express");
const cors = require("cors");
const app = express();
const entrepriseRouter = require("./Routes/EntrepriseRoute");
const administrateurRouter = require("./Routes/AdministrateurRoute");
const projetRouter = require("./Routes/ProjetRoute");
const tagRouter = require("./Routes/TagRoute");
const prestationVideoRouter = require("./Routes/PrestationVideoRoute");
const prestationTypeRouter = require("./Routes/PrestationTypeRoute");


app.use(cors());
app.use(express.json());
app.use("/entreprises", entrepriseRouter);
app.use("/administrateurs", administrateurRouter);
app.use("/projets", projetRouter );
app.use("/tags", tagRouter );
app.use("/prestationsvideos", prestationVideoRouter);
app.use("/prestationstypes", prestationTypeRouter);



module.exports = app ; 