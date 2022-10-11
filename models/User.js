const { Schema, model } = require('mongoose');
const moment = require('moment');

// Schema for Users

const UserSchema = new Schema({

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


const User = model('User', UserSchema);


UserSchema.virtual('friendCount').get(function() {

  //Returning length

  return this.friends.length;
  
});

// Exporting as User

module.exports = User;
