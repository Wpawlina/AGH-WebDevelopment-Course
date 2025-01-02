const express = require('express');

const Book = require('./books_model.js');
const AuthorizedMiddleware = require('../authorizationMiddleware.js');


const app = express();
app.use(express.json());





app.get('/api/books',async (req,res)=>{
    try{
        const books= await Book.findAll();
        res.status(200).json(books);
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }

})

app.get('/api/books/:id',async (req,res)=>{
   const id =req.params.id;
   try{
         const book= await Book.findByPk(id);
         if(!book){
              return res.status(404).json({message:'Book not found'});
         }
         res.status(200).json(book);
   }
   catch(err){
       console.error(err);
       res.status(500).json({message:'Internal server error'});
   }
});

app.post('/api/books',AuthorizedMiddleware,async (req,res)=>{
    const {title,author,year}=req.body;

    if(!title || !author || !year){
        return res.status(400).json({message:'All fields are required'});
    }
    if(isNaN(year)){
        return res.status(400).json({message:'Invalid year'});
    }

    try{
        
        const book=await Book.create({title,author,year});
        res.status(201).json({book_id:book.id});
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }
});


app.delete('/api/books/:id',AuthorizedMiddleware,async (req,res)=>{
    const id =req.params.id;
    try{
        const book=await Book.findByPk(id);
        if(!book){
            return res.status(404).json({message:'Book not found'});
        }
        await book.destroy();
        res.status(200).json({message:'Book id: '+ id+ ' deleted'});
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }
});



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

