const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

// Schema for reactions

const ReactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },

      reactionBody: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 280
      },

      username: {
        type: String,
        required: true,
      },

      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
      }

    },
    {
      toJSON: {
        getters: true
      }
    }
  );

  // Schema for thoughts

const ThoughtSchema = new Schema (
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
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },

        username: {
            type: String,
            required: true,
            ref: 'User'
        },

        reactions: [ReactionSchema],
    },

    {
      toJSON: {

        virtuals: true,
        getters: true

      },

      id: false
  }
)


const Thought = model('Thought', ThoughtSchema);

  ThoughtSchema.virtual('reactionCount').get(function() {

    // returing length

    return this.reactions.length;

  });


// Export as "Thought"

module.exports = Thought;