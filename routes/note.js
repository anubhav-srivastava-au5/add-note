const express = require('express');
const router = express.Router();

const Note=require('../models/Note');

router.post('/create', async(req,res) => {
    const note= new Note({
        note:req.body.note,
        date:req.body.date
    });
    const newNote= await note.save();
    if(newNote){
        return res.status(201).send({message:"new note created",data:newNote})
     }
     return res.status(500).send({message:"error in creating note"})
})

router.get('/all',async(req,res)=>{
    try{
        const allNotes = await Note.find()
        res.status(200).json(allNotes)
    }
    
    catch(err){
       res.status(400).send(err);
        }
})
module.exports=router;