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

## Testing

- What to test
- unit
  - service methods
  - controllers? tbd
- integration
  - E2E
  - CRUD
  - No mocks

## TODOS

- How to test controllers? tbd
- Define service layer, class based? tbd
- Define and create a validator
  - common string validations
  - common number validations
  - generate fields array containing non passed validations
- Define a mapper? tbd
- Configure auth with bearer token
