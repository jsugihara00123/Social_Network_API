const router = require('express').Router()
const apiRoutes = require('./api')


router.use('/api', apiRoutes);

router.use((req, res) => {

  //Error message for 404 status

  res.status(404).send('<h1> Oops! 404 Error!</h1>');

});



module.exports = router;