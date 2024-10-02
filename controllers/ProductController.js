import Product from "../models/Products.js";

class ProductController {
    async getIndex(req, res) {
        try {
            const products = await Product.find(); 
            console.log(products);
            
            res.render('index', {products}); 
        } catch (error) {
            console.log(error.message);
            
        }
    }
    async getList(req,res) {
        try { 
            const products = await Product.find();
            res.render('test', { products });
        } catch (error) {
            console.log(err.message);
        }
    }

    create(req,res) { 
        res.render('create');
    }
    async edit(req,res) {
        console.log(req.params, req.query);
        const id = req.params.id;
        const oldPro = await Product.findById(id);   
        res.render('edit', {oldPro});
    }

    async save(req,res) {
        try {
            const newProduct = {
                name: req.body.name,
                price: req.body.price,
                image: req.body.image
            };
            await Product.create(newProduct); 
            res.redirect('list');
        } catch (error) {
            console.log(err.message);
        }
    }

    async update(req,res) {
        try {
            const newData = {
                name: req.body.name,
                price: req.body.price,
                image: req.body.image
            };
            const id = req.params.id;
            await Product.findByIdAndUpdate(id,newData); 

            res.redirect('/list');
        } catch (error) {
            console.log(error.message);
        }
    }

    async delete(req,res) {
        try {
            const id = req.params.id;
            await Product.findByIdAndDelete(id);1
            res.redirect('/list');
        } catch (error) {
            console.log(error.message);
        }
    }
    

}




export default ProductController;