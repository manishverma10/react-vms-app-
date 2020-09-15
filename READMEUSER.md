
This project is developed to create, delete and update background color of VM notes.

dependency(frontend):
1. Nodejs
2. React
3. react-bootstrap 4.5.
4. mocha(testing)
5. chai(testing)


dependency(backend):
1. mysql
2. php
3. apache
3. file permission(project folder to read write)


Guidance to run project:

Frontend code :
1. run:- 'npm install' to install dependencies from your terminal.
2. then run:- 'npm start'.
3. for testing run:- 'npm test'



Backend code(php files which are attached ie. db_conn.php and note_create_app.php):
1. must be /var/www/html/ in linux or if you're using windows then it must be inside c/xampp/htdocs/ directory to run php files.
2. then make changes db_conn.php file i.e. your database credentials with existing and database name.
3. import note_info.sql table into your database
and hurray that's it from backend side 
 
