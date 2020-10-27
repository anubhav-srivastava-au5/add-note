const mongoose = require('mongoose');
const Schema = mongoose.Schema

const NoteSchema=new Schema({
    note:{type : String, required: true},
    Date:{type: Date, default:Date.now}
})

module.exports=Notes=mongoose.model('notes',NoteSchema)