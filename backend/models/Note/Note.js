const mongoose=require('mongoose');
const {Schema}=mongoose;

const NoteSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'auth'
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model("notes", NoteSchema);