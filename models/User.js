const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
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
      type: Schema.Types.ObjectId,
      ref: "thougts",
    },
  ],     
  friends:[
    {
        type:Schema.Types.ObjectId,
        ref:'user'
    }
  ]
},
);



userSchema.virtual('friendCount').get(function () {
    return this.friends.length
})


const User = model('user',userSchema)

module.exports = User