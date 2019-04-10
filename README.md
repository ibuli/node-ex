# node-ex
RESTful APIs with Node.js and Express

# Getting Started

### Install requried softwares
- Node.js from [here](nodejs.org)
- MongoDB from [here](mongodb.com)

### Install Express
- use `npm install express --save`

### Install Mongoose
- use `npm install mongoose --save`

### Install `nodemon` - which will auto restart our server when we make any change in file
- use `npm install nodemon --save`

### ES6 JavaScript transpiled with Babel
- We are using Babel to trspile ES6 javascript code
- We will require to install Babel BabelPreset2015 and BabelPresetStage0
- We will install it as a devDependency
- use `npm install --save-dev babel-cli babel-preset-es2015 babel-preset-stage-0`

### Install BodyParser
- use `npm install body-parser --save`

### Create `index.js`
- Write basic code to get started using express app and serve the basic server

### Create folder structure
<pre>
|-- src
  |-- controllers
    +-- crmController.js
  |-- models
    +-- crmModel.js
  |-- routes
    +-- crmRoutes.js
</pre>

### Setup routes in `crmRoutes.js` file
- i.e. `GET`, `POST`, `PUT`, `DELETE`

### Add `mongoose` and `body-parser` setup
- Create Mongoose connection to MongoDB database
- mongoose is an elegant `mongodb` object modeling for `node.js`
- Add [`body-parser`](https://github.com/expressjs/body-parser) (`Node.js` body parsing middleware.) configs
- It used to parse incoming request bodies in a middleware before your handlers, available under the `req.body` property.

### Add Schema for Contact in `crmModel.js`
- We can define property name and it's `type` along with the field type if required or not.
- We can also set default value to the property

### Create a controller function to insert data into database
- Create `addNewContact` function inside your `crmController.js`.
- The controller will be used to insert data into MongoDB database using the Model we created.
- Replace the `/contact` route's `POST` method with the `addNewContact` controller and test it out.

### Create a controller function to fetch data from database
- Create `getContacts` function inside your `crmController.js`.
- The controller will be used to fetch data from MongoDB database.
- Replace the `/contact` route's `GET` method with the `getContacts` controller and test it out.

### Create a controller function to fetch a particular data from database using `ID`
- Create `getContactWithID` function inside your `crmController.js`.
- The controller will be used to fetch a particular data from MongoDB database using a user's ID.
- Add a new `GET` method to this route `/contact/:contactId` and pass the `getContactWithID` controller and test it out.
- Make sure you pass proper ID from the database example - `localhost:3000/contact/5cad9c9b02825c3294a6be42`

### Create a controller function to update a particular data from database using `ID`
- Create `updateContact` function inside your `crmController.js`.
- The controller will be used to update a particular user's data from MongoDB database using a user's ID.
- Update `PUT` method of this route `/contact/:contactId` and pass the `updateContact` controller and test it out.
- Make sure you pass proper ID from the database example - `localhost:3000/contact/5cad9c9b02825c3294a6be42` and pass data as `x-www-form-urlencoded`

### Create a controller function to delete a particular data from database using `ID`
- Create `deleteContact` function inside your `crmController.js`.
- The controller will be used to delete a particular user's data from MongoDB database using a user's ID.
- Update `DELETE` method of this route `/contact/:contactId` and pass the `deleteContact` controller and test it out.
- Make sure you pass proper ID from the database example - `localhost:3000/contact/5cad9c9b02825c3294a6be42` and make sure the request type is set to `DELETE`

### End notes
- Finally the CRUD operation on this project are completed
- Feel free to make your own routes and add controllers and create new Schema according to your needs

## Happy Coding 😊