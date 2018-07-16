# MySQL CRUD

You will implement the database layer of an already running Express app. Specifically, you will implement all CRUD operations (Create, Read, Update, Delete). This time you will be using MySQL only (using the mysql npm module). You may refactor to use Sequelize if you wish but only after implementing CRUD using just MySQL.

## Getting Started

Navigate to mysql-crud in terminal

Run the following in order:

1.  `npm install`
1.  `mysql -u root -p < database-mysql/setup.sql` in your terminal to create your database.
1.  `mysql -u root -p < database-mysql/schema.sql` in your terminal to set up the schema.
1.  `cp database-mysql/config.example.js database-mysql/config.js` and ensure you have entered the correct credentials.
1.  `npm start`

NOTE:

- Ensure that you have updated your credentials in `database-mysql/config.js`, otherwise you won't connect to your server.
- You may need to manually start your MySQL server via the command `mysql.server start`.
- If you're having trouble running MySQL version 8 along with the mysql npm module, I recommend reverting to MySQL version 5.7. MySQL version 8 is pretty new, 5.7 is battle-tested and works just fine.

If using Mac / Homebrew: Follow these [instructions](https://stackoverflow.com/a/51031221/8378145).

If using Windows: Manually uninstall MySQL 8 then install MySQL 5.7.

There is no front-end for this app. Use [Postman](https://www.getpostman.com/) to debug it.

## Your Task

All of your work will be in the following files:

- `server/controller.js`
- `server/sequelize/controller.js`

You are to implement the CRUD methods in the controller. You can run your tests to ensure your methods are working correctly. Instructions below for running tests.

Pay attention to the `server/routes.js` file to see what the endpoint/s is/are for each CRUD operation.

As an added challenge, consider refactoring your solution to make use of ES6 arrow functions and const / let variable declarations.

### No ORM

To run tests for No ORM, ensure your server is running and run `npm run test:no-orm`.

### Sequelize

Make sure to uncomment all items in server.js and routes.js pertaining to Sequelize and hide the items

To run tests for Sequelize, ensure your server is running and run `npm run test:sequelize`.
