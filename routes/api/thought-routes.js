const router = require("express").Router();

//object array of all api calls for thoughts

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

router
  .route("/:thoughtId/reactions")
  .post(addReaction)
  .delete(deleteReaction);


//export router
module.exports = router;
