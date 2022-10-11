const router = require("express").Router()

//adding all user api calls in one object array

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller")



//GET and POST

router.route("/").get(getAllUsers).post(createUser)

// GET one, PUT, and DELETE with /:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser)

// Add or delete  friend
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend)





//export router
module.exports = router;
