@frontend
-Set up react in frontend using vite - npm create vite@latest . -- --template react

@root
-install express - npm i express
-install nodemon as devDependency - npm i -D nodemon

@frontend
to start client
-npm run dev

@root
to start server
-npm run server

install dotenv - npm i dotenv

install mongoose to connect to DB and,
to create Model

- npm install mongoose --save

Create 3 models - for User, Products and Order

create a folder config
create a file db.js
inside it create a function to connect to DB

create data folder
add user and products data inside it

install bcyptjs to hash password before saving it to database
-npm i bcryptjs

create a seeder file for seeding this data to database.

<!-- seeder.js -->

console.log(process.argv)

<!-- frontend -->
