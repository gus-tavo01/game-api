# Game api

## Technologies

- Dotenv
- Mongoose
- Jest
- Node 14
- Javascript
- Passport
- Nodemon
- Express

## Controllers

### Request flow

- validate if authenticated
- validate request parameters/body ? tbd
- consume service
- generate api response

### Auth controller

- api/v1/auth/login
  - POST
- api/v1/auth/register
  - POST

### Characters controller

- api/v1/characters
  - GET
  - GET
  - POST
  - PUT
  - PATCH

## Application

- Store game characters information
  - character name
  - level
  - class
- Store accounts and arrange to characters
  - username
  - email
  - hashed password
  - create date

## Service

- common validations
- retrieve data from repository
- map from repo to DTO
- return service response
  - payload
  - fields

## Authentication

### Get token flow

- validate credentials (username, password)
- generate token
- return response with bearer token

### Configure passport

- extract token from headers
- validate token?
- validate user is found
- implement auth middleware on routes

## Testing

- What to test
  - controllers
  - service methods
- unit
  - No mocked dependencies (except express)
  - assert against express res.json, res.status calls
- integration
  - E2E
  - CRUD
  - service methods

## TODOS

- Define service layer flow
- Define and create a validator
  - common string validations
  - common number validations
  - generate fields array containing non passed validations
- Define a mapper? tbd
- Configure passport JWT strategy
