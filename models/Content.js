const mongoose= require ('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema({
    title:{
        type:String
    },
    body:{
        type:String
    },
},
{
    timestamps:true, 
});
module.exports = mongoose.model
("Content", contentSchema);