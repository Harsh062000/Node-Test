
Table of Contents

-Getting Started
  -Installation
  -Usage
-API Endpoints
-ENV file

Getting Started
       Installation
       -Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

       -Clone this repository to your local machine or download the ZIP file.

       -Open your terminal and navigate to the project directory.

       -Install the project dependencies by running the following command:

              npm install

       Usage
       Start the server by running:

              node index.js
       
       -The API will be accessible at http://localhost:4000/api/v1.

       You can use tools like Postman

API Endpoints
       The following endpoints are available:

       Create User: POST /createuser
       Read User by ID: GET /getuserdata/:id
       Update User by ID: PUT /updateuser/:id
       Delete User by ID: DELETE /deleteuser/:id
       Refer to the Usage section for instructions on how to test these endpoints.

ENV file

create a file named config.env
       -creat a variable named MONGO_URI and pass mongo uri to connect with mongoatlas
       -create a variable named PORT and pass 4000 as port number

