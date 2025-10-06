

# Uber User Registration API

This document describes how to register a new user in the Uber backend project.

## Register User

### Endpoint

```
POST /users/register
```

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Validation Rules

- `fullname.firstname`: Required, minimum 3 characters.
- `email`: Required, must be a valid email.
- `password`: Required, minimum 6 characters.

### Example Request

```sh
curl -X POST http://localhost:3000/users/register \

  -d '{
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "password": "securepassword"
  }'
```

### Successful Response

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "60f7c2b5e1d3c2a5b8e4a123",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "password": "<hashed_password>",
  
  }
}
```

- `token`: JWT authentication token for the user.
- `user`: The created user object.

### Error Response Example

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### Notes

- Passwords are securely hashed before storage.
- The JWT token can be used for authenticated requests.

---

For more details, see the implementation in:
- [routes/user.routes.js](routes/user.routes.js)
- [controllers/user.controller.js](controllers/user.controller.js)
- [services/user.service.js](services/user.service.js)
- [models/user.models.js](models/user.models.js)



