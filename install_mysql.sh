#!/bin/bash

# Install MySQL server
echo "Installing MySQL server"
sudo yum install -y mysql-server -q
echo "MySQL installed successfully"

# Start MySQL service
sudo systemctl start mysqld

# Start MySQL service
sudo systemctl enable mysqld

# Set root password to 'Password'
sudo mysqladmin -u root password 'Password'

# Create a database named 'myapp'
sudo mysql -u root -pPassword -e "CREATE DATABASE myapp;"

# Create a table named 'users' inside 'myapp' database
sudo mysql -u root -pPassword myapp -e "CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);"

# Insert data into 'users' table
sudo mysql -u root -pPassword myapp -e "INSERT INTO users (username, password) VALUES
    ('john_doe', 'password123'),
    ('jane_smith', 'test456'),
    ('alice_johnson', 'pass123');"

# Run a select query to view data in 'users' table
sudo mysql -u root -pPassword myapp -e "SELECT * FROM users;"
