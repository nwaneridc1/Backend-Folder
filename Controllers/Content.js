const Content = require("../models/Content");

const asyncHandler =require ("express-async-handler");

const getAllContents = asyncHandler(async(req, res)=>{
    const getContents = await Content.find().sort({createdAt:-1});

    res.status(200).json(getContents);
});
const postContents = asyncHandler(async(req, res)=>{
    // const {title,body}=req.body
    try {
        const newPost = await Content.create({
            title:req.body.title,
            body:req.body.body,
        });
        res.status(200).json({
            message:"post Successful",
            newPost,
        });
    } catch (error) {
        res.status(401).json({
            message:"Unable to create",
            error,
        });
    }
});

const getsingleContent = asyncHandler(async(req, res)=>{
    const {id} =req.params
    try{
        const data= await Content.findById(id)
        if(!data){
            res.status(404).json({
                message:"User Not found"
            })
        }
        res.status(200).json({
            message:"Successful",
            data
        })

    }
    catch (error){
        res.status(401).json({
            message:"Unsuccessful",
            data
        })
    }
});

const UpdateContent = asyncHandler(async(req, res)=>{
    const {id} =req.params  /// where to pass your params and req.body.
    const {title, body}=req.body
    try {
        const UpdateContent= await Content.findById(id);
        if (!UpdateContent) {
            res.status(201).json({
            message:"User Not Found",
        })}
        UpdateContent.title=title||UpdateContent.title
        UpdateContent.body=body||UpdateContent.title
        await UpdateContent.save()
        res.status(201).json({
            message:"Update Successful",
            UpdateContent
        })
    } catch (error) {
        res.status(401).json({
            message:"Failed To Update",
            UpdateContent
        })
    }
});

const DeleteContent = asyncHandler(async(req, res)=>{
    const {id} =req.params 
    try {
        const DeleteContent=await Content.findByIdAndDelete(id)
        if (!DeleteContent) {
            res.status(201).json({
                message:"Content Not Found"

            })
        }
        res.status(201).json({
        message:"Delete Successful"
        })

    } catch (error) {
        res.status(401).json({
            message:"Failed To Update",
            DeleteContent
        })
    }
});




module.exports = {
    getAllContents,
    postContents,
    getsingleContent,
    UpdateContent,
    DeleteContent
};