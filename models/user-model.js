mongoose - required("mongoose");
const uuidv1 = require("uuid/1");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  title: {
    type: String
  },

  profilePhoto: {
    data: Buffer,
    contentType: String
  },

  website: {
    type: String
  },
  email: {
    type: String,
    required: true
  },

  blurb: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },

  experience: [
    {
      titleRole: {
        type: String
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],

  TrainingEducation: [
    {
      schoolName: {
        type: String
      },
      degreeCertify: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      }
    }
  ],

  social: {
    youtube: { type: String },
    twitter: { type: String },
    facebook: { type: String },
    linkedin: { type: String },
    instagram: { type: String }
  },

  hashed_password: {},
  salt: {},

  following: [{}],
  followers: [{}],

  updated: Date
});

module.exports = mongoose.model("User", userSchema);
