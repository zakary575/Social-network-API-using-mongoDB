const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId:{
            type:Schema.Types.ObjectId
        },
        reactionBody:{
            type:String,
            require:true,
            max_length:280
        },
        username:{
            type:String,
            require:true
        },
        createdAt:{
            type:Date,
            default:Date.now(),
        }
    }
)

 module.exports = reactionSchema