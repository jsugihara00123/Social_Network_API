const { Schema, model, Types } = require('mongoose')

const dateFormat = require("../utils/dateFormat")


// Schema for reactions

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },

      reactionBody: {
        type: String,
        required: true,
        maxlength: 280
      },

      username: {
        type: String,
        required: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal),
      }

    },
    {
      toJSON: {
        getters: true
      }
    }
  );


  // Schema for thoughts

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal),
          },

        username: {
            type: String,
            required: true,
            ref: 'User'
        },

        reactions: [reactionSchema],
    },

    {
      toJSON: {

        virtuals: true,
        getters: true

      },

      id: false
  }
)



thoughtSchema.virtual("reactionCount").get(function () {
  //return length
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);


// Export as "Thought"

module.exports = Thought;