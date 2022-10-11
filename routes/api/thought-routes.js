const router = require('express').Router()


//object containing all api calls
const {

    getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    removeReaction,
    addReaction

} = require('../../controllers/thought-controller')

router

    .route('/')
    .get(getAllThoughts)
    .post(createThought)


router

    .route('/:thoughtId/:reactionId')
    .delete(removeReaction)

router

    .route('/:thoughtId/reactions')
    .post(addReaction)

router

    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)



//exporing router

module.exports = router;