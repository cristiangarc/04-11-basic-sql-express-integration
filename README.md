You are a developer working for a small e-commerce company called "ShopMate". The company is building an online platform to manage its product catalog. Your task is to implement the backend functionality for managing products using Express and Postgres with the pg-promise library.

### Setup Instructions

Fork this repository to your GitHub account.

Clone the forked repository to your local machine.

Install the necessary dependencies by running the following command:

```bash
npm install
```
Set up a Postgres database and update the database connection configuration in config/db.js.
Run the database schema file (schema.sql) to create the required tables:

```bash
psql -f schema.sql
```
Start the Express server by running:

```bash
npm start
```

### Exercise Instructions

Implement the following CRUD operations for products in the routes/products.js file:

- GET /products: Retrieve all products from the database.
- GET /products/:id: Retrieve a single product by its ID.
- POST /products: Create a new product in the database.
- PUT /products/:id: Update a product by its ID.
- DELETE /products/:id: Delete a product by its ID.

Use the pg-promise library to interact with the Postgres database.

Ensure that the appropriate HTTP status codes and responses are returned for each operation.

Test your implementation by running the provided test cases:

```bash
npm test
```

Make sure all the tests pass successfully.

Commit your changes and push them to your forked repository.

Create a pull request to submit your solution.

### Additional Notes

The product schema are defined in the schema.sql file. We've also supplied a reset SQL file you can run with

```bash
psql -f reset.sql
```

in case you need to flush your existing data.

[You can find the pg-promise documentation here](https://vitaly-t.github.io/pg-promise/)

Feel free to explore and add any additional functionality or error handling as you see fit.

Good luck with the exercise!