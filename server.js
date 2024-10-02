import express from 'express';
import mongoose from 'mongoose';
import ProductController from './controllers/ProductController.js';

const app = new express;
const port = 3000;
const proController = new ProductController();

app.set('view engine','ejs');
app.set('views','./views/admin/assets');
app.use(express.static('./views/admin/assets'));
app.use(
    express.urlencoded({
        extended:true,
    })
);



mongoose.connect('mongodb://localhost:27017/asm_nodejs')
.then(result =>{
    console.log("Kết nôi thành công với DB");
    
    app.get('/list',proController.getList);
    app.get('/create',proController.create);
    app.post('/save', proController.save);
    app.get('/edit/:id',proController.edit);
    app.post('/update/:id', proController.update);
    app.get('/delete/:id', proController.delete);
    app.get('/', proController.getIndex);
    app.get('/test',(req,res)=>{
        res.render('test');
    })

    app.listen(port,()=>{
        console.log(`Server is running in port ${port}`);
        
    })
}
    
);

