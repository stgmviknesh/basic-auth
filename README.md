# basic-auth
Basic authentication usnig Express and MySQL in a Oracle Linux / CentOS / RHEL

# Requirements
1. Any RHEL flavor OS
2. MySQL server 

# Steps to follow
1. Login to your OS VM
2. Run the install_mysql.sh file 
    > This will install mysql-server 
    > Password for root will be set to Password
    > It will create 
        >> a DB named "myapp" which will be used by express
        >> a Table named "users" inside the DB
        >> three users username - password
            >>> 'john_doe' - 'password123'
            >>> 'jane_smith', 'test456'
            >>> 'alice_johnson', 'pass123'
3. Run node server.js
4. The site should run on http://localhost:3000