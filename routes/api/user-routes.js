const router = require("express").Router();

//Object array of all api calls for users

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");



router
  .route("/")
  .get(getAllUsers)
  .post(createUser);

router
  .route("/:id")
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

router
  .route("/:id/friends/:friendsId")
  .post(addFriend)
  .delete(removeFriend);

 //export router 

module.exports = router;
