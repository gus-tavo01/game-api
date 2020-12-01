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
- jsonwebtoken
- passport
- bcrypt

## Controllers

### Request flow

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

### Accounts ??

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

- bearerAuth middleware for routes

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

- Define repository initialization
- Define service layer flow
- Define and create a validator
  - common string validations
  - common number validations
  - generate fields array containing non passed validations
- Define a mapper? tbd
- Finish Auth module
  - generate hashed password on login
  - code clean up
  - add missing validations
  - create reusable method to generate password?
