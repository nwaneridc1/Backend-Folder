import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlogSchema = new Schema({
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
("Blog", BlogSchema);