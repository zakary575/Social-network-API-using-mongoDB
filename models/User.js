const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userId: {
    tyep: Schema.types.objectid,
  },
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} is nota valid email!`,
    },
  },
  thoughts: [
    {
      type: Schema.Types.objectid,
      ref: "thougts",
    },
  ],     
  friends:[
    {
        type:Schema.Types.objectid,
        ref:'user'
    }
  ]
},
);

const User = model('user',userSchema)

module.exports = User