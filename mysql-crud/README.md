# MySQL CRUD

You will implement the database layer of an already running Express app. Specifically, you will implement all CRUD operations (Create, Read, Update, Delete). This time you will be using MySQL only (using the mysql npm module). You may refactor to use Sequelize if you wish but only after implementing CRUD using just MySQL.

## Getting Started

Navigate to mysql-crud in terminal
Run yarn install in the mysql-crud folder
Run ```mysql -u root < database-mysql/setup.sql``` in your terminal to create your database.
Run yarn start

### No ORM

Run ```mysql -u root < database-mysql/schema.sql``` in your terminal to create your schema once you've written them out in schema.sql

To run tests for No ORM, run ```yarn test:no-orm```


### Sequelize

Make sure to uncomment all items in server.js and routes.js pertaining to Sequelize and hide the items

To run tests for Sequelize, run ```yarn test:sequelize```