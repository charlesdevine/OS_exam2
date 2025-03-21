# WD_exam2

API built with Node.js, Express, and MongoDB for user registration/login and film CRUD operations.

### Steps to Set Up:

1. Start with `npm init` to create the `package.json` file, then edit the following:

    ```json
    "scripts": {
      "start": "nodemon app.js"
    }
    ```

2. Then, install all of the dependencies needed:

    ```bash
    npm install express nodemon mongoose body-parser dotenv joi bcryptjs jsonwebtoken
    ```

3. Create a new MongoDB collection and connect to it.

4. Once you are ready to run all of the scripts, use the following command:

    ```bash
    npm start
    ```

---

### API Documentation:

#### User Registration:
- `POST /api/user/register`

#### User Login:
- `POST /api/user/login`

#### Film CRUD Operations:
- `GET /api/film/` - Fetch all films
- `POST /api/film/` - Create a film
- `PUT /api/film/:id` - Update a film
- `DELETE /api/film/:id` - Delete a film
