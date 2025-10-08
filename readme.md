

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


## Login User

### Endpoint

```
POST /users/login
```

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Validation Rules

- `email`: Required, must be a valid email.
- `password`: Required, minimum 6 characters.



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
- `user`: The authenticated user object.

### Error Response Example

#### Validation Error

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

#### Authentication Error

```json
"Invalid email or password"
```

### Notes

- The login endpoint verifies the user's credentials.
- On success, it returns a JWT token and user details.
- Use the token for authenticated requests to other endpoints.




## Get User Profile

### Endpoint

```
GET /users/profile
```

### Description

Returns the authenticated user's profile information. Requires a valid JWT token in the request (sent via cookie or `Authorization` header).

### Example Request

```sh
curl -X GET http://localhost:3000/users/profile \
  -H "Authorization: Bearer <jwt_token>"
```

### Successful Response

```json
{
  "_id": "60f7c2b5e1d3c2a5b8e4a123",
  "fullname": {
    "firstname": "Alice",
    "lastname": "Smith"
  },
  "email": "alice.smith@example.com",
  "password": "<hashed_password>",

}
```

### Error Response

```json
{
  "message": "unauthorized"
}
```

---

## Logout User

### Endpoint

```
GET /users/logout
```

### Description

Logs out the authenticated user by blacklisting their JWT token and clearing the authentication cookie. Requires a valid JWT token.

### Example Request

```sh
curl -X GET http://localhost:3000/users/logout \
  -H "Authorization: Bearer <jwt_token>"
```

### Successful Response

```json
{
  "message": "logged out"
}
```

### Error Response

```json
{
  "message": "unauthorized"
}
```

---




## Register Captain

### Endpoint

```
POST /captains/register
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
  "password": "yourpassword",
  "vehicle": {
    "color": "red",
    "vehicleNo": "MH12AB1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Validation Rules

- `fullname.firstname`: Required, minimum 3 characters.
- `email`: Required, must be a valid email.
- `password`: Required, minimum 6 characters.
- `vehicle.color`: Required.
- `vehicle.vehicleNo`: Required.
- `vehicle.capacity`: Required, minimum 1.
- `vehicle.vehicleType`: Required, must be one of `car`, `bike`, `auto`.



### Successful Response

```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "60f7c2b5e1d3c2a5b8e4a456",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "blue",
      "vehicleNo": "MH14XY9876",
      "capacity": 3,
      "vehicleType": "auto"
    },
    "status": "inactive",
    "socketId": null
  }
}
```

- `token`: JWT authentication token for the captain.
- `captain`: The created captain object.

- Passwords are securely hashed before storage.
- The JWT token can be used for authenticated requests.
---

## Login Captain

### Endpoint

```
POST /captains/login
```

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "alice.smith@example.com",
  "password": "securepassword"
}
```

#### Validation Rules

- `email`: Required, must be a valid email.
- `password`: Required, minimum 6 characters.


### Successful Response

```json
{
  "token": "<jwt_token>",
  "captain": {
    "_id": "60f7c2b5e1d3c2a5b8e4a456",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "blue",
      "vehicleNo": "MH14XY9876",
      "capacity": 3,
      "vehicleType": "auto"
    },
    "status": "inactive",
    "socketId": null
  }
}
```

### Error Response Example

```json
{
  "message": "invalid email or password"
}
```

---

**Note:**  
On successful login, use the returned JWT token for authenticated requests to other captain endpoints.




## Get Captain Profile

### Endpoint

```
GET /captains/profile
```

### Description

Returns the authenticated captain's profile information. Requires a valid JWT token in the request (sent via cookie or `Authorization` header).

### Example Request

```sh
curl -X GET http://localhost:3000/captains/profile \
  -H "Authorization: Bearer <jwt_token>"
```

### Successful Response

```json
{
  "captain": {
    "_id": "60f7c2b5e1d3c2a5b8e4a456",
    "fullname": {
      "firstname": "Alice",
      "lastname": "Smith"
    },
    "email": "alice.smith@example.com",
    "vehicle": {
      "color": "blue",
      "vehicleNo": "MH14XY9876",
      "capacity": 3,
      "vehicleType": "auto"
    },
    "status": "inactive",
    "socketId": null
  }
}
```

### Error Response

```json
{
  "message": "Unauthorized"
}
```

---

## Logout Captain

### Endpoint

```
GET /captains/logout
```

### Description

Logs out the authenticated captain by blacklisting their JWT token and clearing the authentication cookie. Requires a valid JWT token.

### Example Request

```sh
curl -X GET http://localhost:3000/captains/logout \
  -H "Authorization: Bearer <jwt_token>"
```

### Successful Response

```json
{
  "message": "logout successfully"
}
```

### Error Response

```json
{
  "message": "Unauthorized"
}
```

---

