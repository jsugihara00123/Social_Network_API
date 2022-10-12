// <-------------- THOUGHT ---------------->

const { Thought } = require("../models/Thought");

const { User } = require("../models/User");


//Object array of all API calls for thought controller

const thoughtController = {

  getAllThoughts(req, res) {
    
    //consoloe.log()
    
    Thought.find({})
      .populate({
        path: "reactions",
        select: "-__v",
      })
      .populate({
        path: "thoughts",
        select: "-__v",
      })
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },



  getThoughtById({ params }, res) {
  
    //consoloe.log()
  
    Thought.findOne({ _id: params.id })
      .then((dbThoughtData) => {

        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },



  createThought({ body }, res) {

    //console.log(body); don't need this in production

    Thought.create(body)
      .then((thoughtData) => {
        return User.findOneAndUpdate(
          { _id: body.userId },
          { $push: { thoughts: thoughtData._id } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        console.log(dbUserData)

        if (!dbUserData) {
          res.status(404).json({ message: "No User with this ID" });
          return;
        }

        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },



  updateThought({ params, body }, res) {

    //consoloe.log()
    
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },



  deleteThought({ params }, res) {
    
    //consoloe.log()
    
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },



  addReaction({ params, body }, res) {

    //consoloe.log()
    
    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $addToSet: { reactions: body } },
      { new: true }
    )
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought with this ID" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.json(err));
  },


  deleteReaction({ params }, res) {

    //consoloe.log()

    Thought.findOneAndUpdate(
      { _id: params.thoughtId },
      { $pull: { reactions: { reactionId: params.reactionId } } },
      { new: true }
    )
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.json(err));
  },
};


//export as thoughtController
module.exports = thoughtController;
