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
- Entity
  - className
  - level
  - name
  - stats
    - atk
    - def
    - evasion
    - special dmg
    - special def
    - hp
    - sp

### Accounts controller

- api/v1/accounts
  - GET
  - GET
  - POST
  - PUT
  - PATCH

### Items controller

- api/v1/items
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
  - hashed password
  - email
  - create date
  - country
- Store game items
  - name
  - description
  - type
  - additionalInfo
    - Object
  - level

## Service

- common validations
- retrieve data from repository
- map from repo to DTO
- return service response -> TBD
  - result
  - fields

## Authentication

- bearerAuth middleware for protected routes

## Testing

- How to test
  - assert against express res.json, res.status calls
- unit
  - controllers
- integration
  - E2E
  - CRUD
  - service methods

## TODOS

- Handle and test repository methods
  - get many
  - update
  - delete
- Define service layer flow
  - define service response
  - handle repository exceptions/errors
- Define and create a validator
  - common string validations
  - common number validations
  - generate fields array containing non passed validations
- Define how dependencies are resolved
- Define a mapper? tbd
- Define DB entities
