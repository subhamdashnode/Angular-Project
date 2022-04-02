const express=require('express');
const router=express.Router();
const fetchuser=require('../../middleware/jwt');
const Note=require('../../models/Note/Note');
const { body, validationResult } = require('express-validator');


// Route:1 INSERT THE NOTE useing post request 
router.post('/newnote',[
    body('title','title sould not empty').isLength({min:1}),
    body('description','description should not empty').isLength({min:4})
],fetchuser,async(req,res)=>{
    //if there are no errors ,return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {title,description}=req.body;
    try {
        const note=new Note({
            title,description,user:req.user.id
        })
        const saveNote=await note.save();
        res.json(saveNote);
    } catch (error) {
        return res.status(500).json({error:'internal server error'});
    }
})
// Route:2 EDIT DETAILS useing PUT request
router.put('/editnote/:id',[
    body('title','title sould not empty').isLength({min:1}),
    body('description','description should not empty').isLength({min:4})
],fetchuser,async(req,res)=>{
    //if there are no errors ,return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const {title,description}=req.body;
    try {
        let newNote={};
        if(title){newNote.title=title};
        if(description){newNote.description=description};

        // check the note is exits or not
        let note=await Note.findById(req.params.id);
        if(!note){
            return res.json(404).json({error:"Not Found"});
        }
        // check the user is same or not
        if(note.user.toString() !== req.user.id){
            return res.status(400).json({error:"Not Allowed"});
        }
        note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true});
        res.json({result:"successfully updated"});
    } catch (error) {
        return res.status(500).json({error:'internal server error'});
    }   
})

// Route:3 DELETE-NOTE useing DELETE request 
router.delete('/deletenote/:id',fetchuser,async(req,res)=>{
    try {
        // check the note is exits or not
        let note=await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({error:"Not Found"});
        }
        // check the user is same or not
        if(note.user.toString() !== req.user.id){
            return res.status(401).json({error:"Not Allowed"});
        }
        note=await Note.findByIdAndDelete(req.params.id);
        res.json({result:"successfully deleted"})
    } catch (error) {
        return res.status(500).json({error:"internal server error"});
    }
})
// Route:4 GET-NOTES useing GET request
router.get('/getnotes',fetchuser,async(req,res)=>{
    try {
        const notes=await Note.find({user:req.user.id});
        res.json({result:notes});
    } catch (error) {
        return res.status(500).json({error:"internal server error"});
    }
})
module.exports=router;
