# Unhandled Server Startup Errors in Node.js

This repository demonstrates a common error in Node.js server applications: the lack of proper error handling during server startup. The `bug.js` file contains a basic HTTP server that is missing crucial error handling.  The `bugSolution.js` shows how to add error handling to solve this issue. 

## Bug
The `bug.js` server starts up and listens on port 8080. However, it doesn't handle potential errors that might occur during the server's initialization.  For instance, if port 8080 is already in use, the server will crash silently without providing any helpful error messages to the user.

## Solution
The `bugSolution.js` file addresses this issue by adding an error handling callback to the `server.listen()` method. This callback catches potential errors and logs them to the console, providing valuable debugging information.