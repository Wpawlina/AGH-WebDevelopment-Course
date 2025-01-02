const express = require('express');

const Order = require('./orders_model.js');
const AuthorizedMiddleware = require('../authorizationMiddleware.js');


const app = express();
app.use(express.json());


app.get('/api/orders/:user_id',AuthorizedMiddleware,async (req,res)=>{
    const user_id =req.params.user_id;
    try{
        const orders= await Order.findAll({where:{account_id:user_id}});
        res.status(200).json(orders);
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }
})

app.post('/api/orders',AuthorizedMiddleware,async (req,res)=>{
    const {book_id,quantity}=req.body;
    const user_id=req.user.id;
    if(!book_id || !quantity){
        return res.status(400).json({message:'All fields are required'});
    }
    if(isNaN(quantity)){
        return res.status(400).json({message:'Invalid quantity'});
    }
    try{
            let book = await fetch(`http://localhost:3000/api/books/${book_id}`);
            book=await book.json();
            if(!book.id){
                return res.status(404).json({message:'Book not found'});
            }
            
            const order=await Order.create({book_id:book_id,account_id:user_id,quantity});
            res.status(201).json({order_id:order.id});

    }catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }



})

app.delete('/api/orders/:order_id',AuthorizedMiddleware,async (req,res)=>{
    const order_id=req.params.order_id;
    const user_id=req.user.id;
    try{
        const order=await Order.findOne({where:{id:order_id,account_id:user_id}});
        if(!order){
            return res.status(404).json({message:'Order not found'});
        }
        const book_id=order.book_id;
        await order.destroy();
        res.status(200).json({message:`Order ${book_id} deleted`});

    }catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }
})


app.patch('/api/orders/:order_id',AuthorizedMiddleware,async (req,res)=>{
    const {book_id,quantity}=req.body;
    const user_id=req.user.id;
    const order_id=req.params.order_id;
    try{
        let order=await Order.findOne({where:{id:order_id,account_id:user_id}});
        if(!order){
            return res.status(404).json({message:'Order not found'});
        }
        let updated=false;
        if(book_id)
        {
            let book = await fetch(`http://localhost:3000/api/books/${book_id}`);
            book=await book.json();
            if(!book.id){
                return res.status(404).json({message:'Book not found'});
            }
            order.book_id=book_id;
            updated=true;
        }
        if(quantity && !isNaN(quantity))
        {
            order.quantity=quantity;
            updated=true;
        }
        if(!updated){
            return res.status(400).json({message:'No valid fields to update'});
        }
        await order.save();
        res.status(200).json({message:`Order id: ${order.id} updated`});

        
    }
    catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }


})





app.listen(3001, () => {
    console.log('Order service is running on port 3001');
}   
);