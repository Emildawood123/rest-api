# steps:-
======
1- Evironment Setup
2- Setup express server
3- Mongodb setup
4- Creating User Model
5- Helpers for application
6- authenticaiton controllers
7- authentication routers and logging in
8- MiddleWare creation
9- User controllers and routing


### 1- Evironment Setup :-
=====================
1- npm init -y 
    - initializing a new node project by defualt configration and create file called package.json inside it name of project and some information elso and the package we need to implement the project
2- npm i -D ts-node
    - the command to install packge ts-node by this we can use typescript language so i can specfic type for any variable and function while write code
3- npm i -D @types/ts-node
    - The @types/ts-node package provides TypeScript type definitions for ts-node, which can be helpful for improving editor support, auto-completion, and error-checking when you’re working with ts-node in TypeScript projects.
4- create tsconfig.json
    - for determine the version of node we will use and the baseUrl(the path we will begening from there) and the include list the files will excuted
5- create nodemon.json
    -{
        "watch": "src",
        "ext": ".ts,.js",
        "exec": "ts-node ./src/index.ts"
    }
    the previous format this mean the watch in folder called src and ext mean the extention of file with '.ts' and '.js' and exec the main file will excute

### 2- Setup express server
========================
1- create the main file 'index.ts' inside src folder
2- 
    2.1 - import express for Creates an Express application. The express() function is a top-level function exported by the express module.
    2.2 - import cors for use it as a middleware with express app, we use attribute as credentials: Allows or disallows credentials, such as cookies, in cross-origin requests.
    2.3 - The cookie-parser middleware in Express is used to parse cookies in incoming HTTP requests. This middleware is especially helpful if you want to read cookies in your application for purposes like session handling or authentication.
    2.4 - the body-parser used as middleware for parsing body in incoming http requests. in this application uses for covert body-parser for json fomat app.use(body-parser.json())
    2.5 - compression funciton uses as a middleware for low the time running and reduce bandwidth and better for Better SEO and ux
    2.6 - import http for use createServer buildin function for return new instance of server we created by express

### 3- Mongodb setup
==================
1- import mongoose for connect with db and we will show format
    const MONGO_URL = "mongodb://localhost:27017/test" // this is url we will connect
    mongoose.Promise = Promise // convert to promise
    mongoose.connect(MONGO_URL) // the connect function
    mongoose.connection.on('error', (error: Error) => console.log(error)) // handling if occurs any error
Notes:-
    we face a problem in this section we cant connect with the mongo cluster in mongodb atlas so we connect with the db locally 

### 4- Creating User Model
=======================
1- create schema user inside db folder inside user.ts file
    import mongoose then use as ''new mongoose.createSchema({...docments with types and some propties as a object like username: {type: string, required: true}})''
2- create the function for using for retrive data and minuplition like getUserbyEmail() and createUser() and updateUser()

###  5- Helpers for application
============================
1- import crypto library
2- create const the secret
3- create random() function for take me random base64 by crypto function
    - export const random = () => crypto.randomBytes(128).toString('base64')
4- create auth() function take 2 pramter password and salt for create hashed password to put it in database
    - export const auth = (password: String, salt: string) => {
    return crypto.createHmac("sha256", [password, salt].join('/')).update(SECRET).digest('hex')
    }
### 6- authenticaiton controllers
==============================
    controller is a set of function for handling the request and return response we can called a bridge between routes and bussiness login
1- create folder controllers inside src folder and create file inside it called authentication.ts
    1.1 - create async function called register() takes 2 paramter req: express.Request, res: express.Response check the body of request and append it will send the response

### 7- authentication routers and logging inauthentication routers and logging in
=================================================================================
1- create folder called router inside it index.ts for main router it is for arranged "only" and create file called
  authentication.ts and create exported function take router paramter inside it the router.METHOD_HTTP(PATH, CONTROLLER) 
2- create login controller inside authentication controller file "authentication.ts" then use it in authentication inside authentication.ts file inside router 

### 8- MiddleWare creation
============================
1- create middleware for check the user creditionals for take him some autherizations action
by check the sessionToken 
2- create other middleware for check the owner can controlling for delete its own account actions like delete and update

### 9- User controllers and routing
====================================
1- create controllers for getAllUsers and update user and delete user and use it inside routing inside file called users.ts inside router

# finally
