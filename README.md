# steps:-
-------------
1- Evironment Setup<br />
2- Setup express server<br />
3- Mongodb setup<br />
4- Creating User Model<br />
5- Helpers for application<br />
6- authenticaiton controllers<br />
7- authentication routers and logging in<br />
8- MiddleWare creation<br />
9- User controllers and routing<br />


### 1- Evironment Setup :-
------------------------
1- npm init -y <br />
    - initializing a new node project by defualt configration and create file called package.json inside it name of project and some information elso and the package we need to implement the project<br />
2- npm i -D ts-node<br />
    - the command to install packge ts-node by this we can use typescript language so i can specfic type for any variable and function while write code<br />
3- npm i -D @types/ts-node<br />
    - The @types/ts-node package provides TypeScript type definitions for ts-node, which can be helpful for improving editor support, auto-completion, and error-checking when you’re working with ts-node in <br />TypeScript projects.<br />
4- create tsconfig.json<br />
    - for determine the version of node we will use and the baseUrl(the path we will begening from there) and the include list the files will excuted<br />
5- create nodemon.json<br />
    -{<br />
        "watch": "src",<br />
        "ext": ".ts,.js",<br />
        "exec": "ts-node ./src/index.ts"<br />
    }<br />
    the previous format this mean the watch in folder called src and ext mean the extention of file with '.ts' and '.js' and exec the main file will excute<br />

### 2- Setup express server<br />
---------------------------
1- create the main file 'index.ts' inside src folder<br />
2- <br />
    2.1 - import express for Creates an Express application. The express() function is a top-level function exported by the express module.<br />
    2.2 - import cors for use it as a middleware with express app, we use attribute as credentials: Allows or disallows credentials, such as cookies, in cross-origin requests.<br />
    2.3 - The cookie-parser middleware in Express is used to parse cookies in incoming HTTP requests. This middleware is especially helpful if you want to read cookies in your application for purposes like <br />session handling or authentication.<br />
    2.4 - the body-parser used as middleware for parsing body in incoming http requests. in this application uses for covert body-parser for json fomat app.use(body-parser.json())<br />
    2.5 - compression funciton uses as a middleware for low the time running and reduce bandwidth and better for Better SEO and ux<br />
    2.6 - import http for use createServer buildin function for return new instance of server we created by express<br />

### 3- Mongodb setup
-----------------------
1- import mongoose for connect with db and we will show format<br />
    const MONGO_URL = "mongodb://localhost:27017/test" // this is url we will connect<br />
    mongoose.Promise = Promise // convert to promise<br />
    mongoose.connect(MONGO_URL) // the connect function<br /><br />
    mongoose.connection.on('error', (error: Error) => console.log(error)) // handling if occurs any error<br />
Notes:-<br />
    we face a problem in this section we cant connect with the mongo cluster in mongodb atlas so we connect with the db locally <br />

### 4- Creating User Model
---------------------
1- create schema user inside db folder inside user.ts file<br />
    import mongoose then use as ''new mongoose.createSchema({...docments with types and some propties as a object like username: {type: string, required: true}})''<br />
2- create the function for using for retrive data and minuplition like getUserbyEmail() and createUser() and updateUser()<br />
<br />
###  5- Helpers for application
---------------------
1- import crypto library<br />
2- create const the secret<br />
3- create random() function for take me random base64 by crypto function<br />
    - export const random = () => crypto.randomBytes(128).toString('base64')<br />
4- create auth() function take 2 pramter password and salt for create hashed password to put it in database<br />
    - export const auth = (password: String, salt: string) => {<br />
    return crypto.createHmac("sha256", [password, salt].join('/')).update(SECRET).digest('hex')<br />
    }<br />
### 6- authenticaiton controllers
---------------------
    controller is a set of function for handling the request and return response we can called a bridge between routes and bussiness login<br />
1- create folder controllers inside src folder and create file inside it called authentication.ts<br />
    1.1 - create async function called register() takes 2 paramter req: express.Request, res: express.Response check the body of request and append it will send the response<br />

### 7- authentication routers and logging inauthentication routers and logging in
---------------------
1- create folder called router inside it index.ts for main router it is for arranged "only" and create file called<br />
  authentication.ts and create exported function take router paramter inside it the router.METHOD_HTTP(PATH, CONTROLLER) <br />
2- create login controller inside authentication controller file "authentication.ts" then use it in authentication inside authentication.ts file inside router <br />

### 8- MiddleWare creation
---------------------
1- create middleware for check the user creditionals for take him some autherizations action<br />
by check the sessionToken <br />
2- create other middleware for check the owner can controlling for delete its own account actions like delete and update<br />

### 9- User controllers and routing
---------------------
1- create controllers for getAllUsers and update user and delete user and use it inside routing inside file called users.ts inside router<br />

# finally
