# basic-auth
Basic authentication usnig Express and MySQL in a Oracle Linux / CentOS / RHEL

# Requirements
1. Any RHEL flavor OS
2. MySQL server 

# Steps to follow
1. Login to your OS VM
2. Run the install_mysql.sh file 
    1. This will install mysql-server 
    2. Password for root will be set to Password
    3. It will create 
        i. a DB named "myapp" which will be used by express
        ii. a Table named "users" inside the DB
        iii. three users username - password
            | --------------- |:-------------:|
            | username        | Password      | 
            | --------------- |:-------------:|
            | john_doe        | password123   |
            | jane_smith      | test456       |
            | alice_johnson   | pass123       |
            | --------------- |:-------------:|
3. Run node server.js
4. The site should run on http://localhost:3007

P.S. If you want to change the default root password of mysql, then you need to update the password in install_mysql.sh and server.js files
