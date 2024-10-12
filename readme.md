# Product Management API

## Description

This is a simple RESTful API for managing a list of products. The API allows users to create, update, delete, and fetch products. It follows the MVC pattern and uses Express.js for the backend with PostgreSQL as the database.

## Features

- Create a new product.
- Retrieve all products or a specific product by ID.
- Update existing products.
- Delete products by ID.

## Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL with Sequelize ORM
- **Validation:** Custom middleware for validation

## Project Structure

```
backend/
│
├── controllers/
│   └── productController.js    # Contains the business logic for CRUD operations
│
├── middleware/
│   └── validateProduct.js      # Middleware for product validation
│
├── models/
│   └── product.js              # Sequelize model for the Product
│
├── routes/
│   └── productRoutes.js        # API routes for product CRUD operations
│
└── index.js                    # Entry point of the application
```

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/product-management-api.git
    ```

2. Navigate into the project directory:
    ```bash
    cd product-management-api/backend
    ```

3. Install dependencies using Yarn:
    ```bash
    yarn install
    ```

4. Set up the PostgreSQL database and configure the `.env` file with the following information:
    ```env
    DB_HOST=localhost
    DB_USER=your_postgres_user
    DB_PASSWORD=your_postgres_password
    DB_NAME=product_management
    DB_PORT=5432
    ```

5. Run database migrations to create the tables:
    ```bash
    yarn sequelize db:migrate
    ```

6. Start the server:
    ```bash
    yarn start
    ```

The server will run on `http://localhost:3000`.

## API Endpoints

### 1. Create a Product

**URL:** `POST /products`  
**Body:**

```json
{
    "name": "Laptop",
    "price": 999.99,
    "description": "A high-end gaming laptop",
    "category": "Electronics"
}
```

### 2. Get All Products

**URL:** `GET /products`

### 3. Get Product by ID

**URL:** `GET /products/:id`

### 4. Update a Product

**URL:** `PUT /products/:id`  
**Body:**

```json
{
    "name": "Updated Laptop",
    "price": 1099.99,
    "description": "An updated version of the laptop",
    "category": "Electronics"
}
```

### 5. Delete a Product

**URL:** `DELETE /products/:id`

## Middleware

Custom validation middleware is used to validate product fields such as `name`, `price`, `description`, and `category`. The validation ensures that the fields are correctly formatted before processing the request.

## License

This project is licensed under the MIT License.
