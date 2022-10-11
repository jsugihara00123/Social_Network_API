const { Schema, model } = require('mongoose')
const moment = require('moment')

// Schema for Users

const userSchema = new Schema({

  username: {

    type: String,
    required: true,
    unique: true,
    trim: true

  },

  email: {

    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email address please!']

  },

  thoughts: [

    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],

  friends: [

    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
  },

  { 

  toJSON: {
    virtuals: true,
    getters: true
  },

  id: false
}
);



userSchema.virtual("friendCount").get(function () {

  //return length
  return this.friends.length;
  
});



const User = model("User", userSchema);

// Exporting as User

module.exports = User;
