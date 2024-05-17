const express = require('express');
const router = express.Router();
const db = require('../config/db');

// GET /products
router.get('/products', async (req, res) => {
	try {
		// Implement the logic to retrieve all products from the database
		// Use the pg-promise library to execute the query
		// Return the products as a JSON response
		const products = await db.any('SELECT * FROM products');
		// console.log(products);
		return res.status(200).json(products);
	} catch (error) {
		console.error('Error retrieving products:', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
});

// GET /products/:id
router.get('/products/:id', async (req, res) => {
	try {
		// Implement the logic to retrieve a single product by its ID
		const id = req.params.id;
		const numId = Number(id);
		// console.log(numId);
		const product = await db.any('SELECT * FROM products WHERE id = $1', [
			numId,
		]);
		// console.log('product:', product);
		return res.status(200).json(product[0]);
	} catch (error) {
		console.error('Error retrieving the product', error);
		return res.status(500).json({ error: 'Internal server error' });
	}
});

// POST /products
router.post('/products', async (req, res) => {
	// Implement the logic to create a new product in the database
	const newProduct = req.body;
	await db
		.one(
			'INSERT INTO products (name, price, quantity) VALUES ($1, $2, $3) RETURNING *',
			[newProduct.name, newProduct.price, newProduct.quantity]
		)
		.then((data) => {
			// console.log(data); // print new user id;
			return res.status(200).json(data);
		})
		.catch((error) => {
			console.log('Error creating the product', error); // print error;
			return res.status(500).json({ error: 'Internal server error' });
		});
});

// PUT /products/:id
router.put('/products/:id', async (req, res) => {
	// Implement the logic to update a product by its ID
	const id = req.params.id;
	const numId = Number(id);
	const updatedProduct = req.body;
	// console.log(numId);
	// console.log(updatedProduct);

	await db
		.one(
			'UPDATE products SET (name, price, quantity) = ($1, $2, $3) WHERE id = $4 RETURNING *',
			[
				updatedProduct.name,
				updatedProduct.price,
				updatedProduct.quantity,
				numId,
			]
		)
		.then((data) => {
			console.log(data);
			console.log('Product updated successfully');
			return res.status(200).json(data);
		})
		.catch((error) => {
			console.error('Error updating product:', error);
			return res.status(500).json({ error: 'Internal server error' });
		});
});

// DELETE /products/:id
router.delete('/products/:id', async (req, res) => {
	const id = req.params.id;
	const numId = Number(id);
	// Implement the logic to delete a product by its ID
	await db
		.one('DELETE FROM products WHERE id = $1 RETURNING *', [numId])
		.then((data) => {
			console.log(data); // print deleted user;
			console.log('User deleted successfully');
			return res.status(200).json(data);
		})
		.catch((error) => {
			console.error('Error deleting user:', error);
			return res.status(500).json({ error: 'Internal server error' });
		});
});

module.exports = router;
