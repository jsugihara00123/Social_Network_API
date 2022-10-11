const router = require("express").Router();
const apiRoutes = require("./api");
router.use("/api", apiRoutes);



router.use((req, res) => {

  res.status(404).send("<h1>Oops! 404 ERROR!</h1>");

});

//export router
module.exports = router;
