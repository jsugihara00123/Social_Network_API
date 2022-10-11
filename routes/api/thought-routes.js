const router = require("express").Router()

//consolidating all Thought APIs in one object array

const {

  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,

} = require("../../controllers/thought-controller")

//GET adn POST

router.route("/").get(getAllThoughts).post(createThought)

//GET, PUT, and DELETE with /:id in url

router.route("/:id").get(getThoughtById).put(updateThought).delete(deleteThought);

//add or delete reaction

router.route("/:thoughtId/reactions").post(addReaction).delete(deleteReaction)

module.exports = router;
