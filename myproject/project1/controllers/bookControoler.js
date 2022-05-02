const Book=require('../models/bookModels');


const getAllBook=(req,res)=>{
    let books;
    books=await Book.find();
    if(!books){
     return res.status(500).send("No Book found");
    }
    return res.status(200).json({book})
}
   const addBook=async (req,res)=>{

    const {title,author,description}=req.body;
    let book=new Book({
        title,
        author,
        description
    });
    await book.save();
    if(!book){
        return res.status(200).json({book});
    }
    const deleteBook=async (req,res)=>{
        const id =req.params.id;
    }

   }
exports.addBook=addBook;
exports.getAllBook=getAllBook;
exports.deleteBook=deleteBook;