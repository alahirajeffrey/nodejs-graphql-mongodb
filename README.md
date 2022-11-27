# Introduction
This is a simple tutorial guide to building apis with nodejs, express, mongodb and graphql

# Requirements
- [Nodejs](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [Mongodb](https://www.mongodb.com/try/download/community) is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases, MongoDB makes use of collections and documents. Documents consist of key-value pairs which are the basic unit of data in MongoDB. Collections contain sets of documents and function which is the equivalent of relational database tables.
- [Graphql](https://graphql.org/) is a query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more.
- [Express](https://expressjs.com/) is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

# Important Graphql Definitions
- Query : This is the request sent to the server by the client and specifies the exact data the client requires from the server.
- Schema : This is the blueprint for communication between the client and the server. It specifies the queries the client can make, type of data retrievableand relationship between types
- Resolver : This is a function applied to every field and it specifies how that field is connected to the backend and fetches data for that field from a database

# How to use
- Ensure you have nodejs, git and mongodb installed locally.
- clone this repository using `git clone https://github.com/alahirajeffrey/nodejs-mongodb-crud-app.git`
-  Navigate to project folder and install dependencies using `npm install`
- Create .env file and add environment variables using the .env.example file as a guide
-  Open terminal and type `npm run dev` to start server in development mode or type `npm run start` to start server in production mode
- Navigate to the url to test e.g `localhost:5000/graphql`. 

# Available Queries and Fields
- Get a client by id
```
{
    user(id:"a6727122-4b65-462f-858d-4e961918d87b"){
        id,
        name,
        email,
        phone
    }
}
```
- Get a project and its associated client by id
```
{
    project(id:"a6727122-4b65-462f-858d-4e961918d87b"){
        id,
        name,
        description,
        status,
        client{
            id,
            name,
            email,
            phone
        }
    }
}
```
- Get all clients
```
{
    users{
        id,
        name,
        email,
        phone
    }
}
```
- Get all projects and their associated clients
```
{
    projects{
        id,
        name,
        description,
        status,
        client{
            id,
            name,
            email,
            phone
        }
    }
}
```


# Available Mutations and Fields
- Add a client
```
mutation{
    addClient(name:"john doe", phone:"071111", email:"johndoe@gmail.com"){
        name,
        id,
        phone,
        email
    }
}
```
- Delete a client
```
mutation{
    deleteClient(id:"a6727122-4b65-462f-858d-4e961918d87b"){
        name,
        phone,
        email
    }
}
```
- Add a project
```
mutation{
    addProject(name:"web dev", status:new, description:"develop a web app for client", clientId:"a6727122-4b65-462f-858d-4e961918d87b"){
        name,
        description,
        status,
        clientId
    }
}
```
- Delete a project
```
mutation{
    deleteProject(id:"a6727122-4b65-462f-858d-4e961918d87b"){
        name,
        description,
        status,
        clientId
    }
}
```
- Update a project
```
mutation{
    updateProject(id:"a6727122-4b65-462f-858d-4e961918d87b", name:"web development", status:completed, description:"develop a web app for client"){
        name,
        status,
        description,
        clientId
    }
}
```

# Author
[Alahira Jeffrey]((https://github.com/alahirajeffrey))

# Lincense
This project is available for use under the MIT License.
