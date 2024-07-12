const express = require("express");
const router = express.Router();

//Create a Add Product Api

router.post("/addproduct" , async (req,res)=>{
    try{
        const{title , description, price , selectedImage}=req.body;
        if(!title || !description || !price || !slectedImage){
            return res.status(409).json({message:"Please Fill The Data"});
        }

        const productData = new Product({title ,description, price ,selectedImage});
        await productData.save();
        res.status(201).json({message:"Product Added Successfully"});

    }catch(err){
        res.status(409).json({message:"Product Not Added "});

    }
})


module.exports = router;