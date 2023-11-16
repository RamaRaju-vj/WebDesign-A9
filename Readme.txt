Commands in Clent Folder:
npm init
npm install nodemon express mongoose jsonwebtoken bcrypt dotenv
npm install react-bootstrap bootstrap (for card components)


Commands in Server Folder:
npm init
npm install nodemon


Client Folder Structure:
WEBDESIGN-A9/client
|-- src/
|   |-- components/
|   |   |-- Home/
|   |   |   |-- Home.js      // Home page with card component 
|   |   |-- AboutUs/
|   |   |   |-- AboutUs.js  // AboutUs page with card component & react map()
|   |   |-- Jobs/
|   |   |   |-- Jobs.js  // Jobs page with card component & react map()
|   |   |-- Contact/
|   |   |   |-- Contact.js  // Contact page with card component & react map()
|   |   |-- Login/
|   |   |   |-- Login.js       // Login page with card component
|   |-- App.js         // imported all the components and implemented App.js
|   |-- index.js

Server Folder Structure:
WEBDESIGN-A9/
|-- server/
|   |-- models/
|   |   |-- userModel.js  // user schema is defined here
|   |-- routes/
|   |   |-- userRoutes.js // all the routes for user are defined
|   |   |-- authRoutes.js // login authentication with database is defined
|   |-- controllers/
|   |   |-- userController.js // api calls for create,update,delete,get all
|   |-- services/
|   |   |-- userService.js //handle user request coming for api calls
|   |-- config/
|   |   |-- keys.js // mogodb url is mentioned (local host)
|   |-- server.js // entry point for backend


