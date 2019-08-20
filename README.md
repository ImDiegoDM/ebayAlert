# ebayAlert

## The Project

This project is a simple ebay alert, an alert can be created using the webapp passing the email, phrase and  how often the products based on that phrase will be sent to the email in minutes.
After the alert is created the server will be sent an email with the first 3 products ordered by the lowest price find in the ebay using the phrase register in the alert every x minutes where x is the how often value register in the alert

## Runing

To run this project you will need the docker and docker-compose installed, and an ebay developer token

> you can obtain a token here https://developer.ebay.com

if you have the prerequisites to run you will need to do:

- Insert a ebay developer token in the docker-compose.yml
- Run ```docker-compose up```
- Access the webapp in the url http://localhost:3000
- To see the emails that are sended you can access the mailhog webapp in the url http://localhost:8025

> if you are running the project for the first time before access the webapp please check if the server is running,  the installation of the dependecies can take while

## Tests

The tests in this porject was divide in the webapp tests and server tests

### Runing webapp tests

To run the tests you wil need to run ```npm run test``` inside the wepapp folder

### Runing server tests

To run the server tests the containers must be runing, this is beacuse the tests will comunicate with the mongodb container to test CRUD operations,
with the containers runing you will need to run ```npm run test``` inside the server folder

## Architecture

In this project the back-end was separated fron the front-end, also was used a container for the mongodb, the mailhog (for visualize the emails) and mongo-express (for visualize the mongodb)


![arcimage](https://github.com/ImDiegoDM/ebayAlert/blob/master/arc.png)

### Server technologies

For the server it was used NodeJs with typecript, express framework, gulp, webpack and nodemon for building and hotreloading and jest for the tests.
Also it was created a simple wrapper into the mongodb package for node for testing and decoupling mongodb package.

### Webapp technologies

For the webapp it was used React with typescript, redux for the global state, styled-components as a css-in-js solution and jest with react-testing-library for the tests
