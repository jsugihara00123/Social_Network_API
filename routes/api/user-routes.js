const router = require('express').Router();

const {

    getAllUsers,
    createUser,
    updateUser,
    getUserById,
    deleteUser,
    addFriend,
    removeFriend

} = require('../../controllers/user-controller');

router

    .route('/')
    .get(getAllUsers)
    .post(createUser);

router

    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(removeFriend)

router

    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)


//Export router

module.exports = router;