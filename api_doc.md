# My Company


## Endpoints :

List of available endpoints:
​
- `POST /register`
- `POST /login`

Routes below need authentication & authorization posisiton Manager:

- `POST /manager/jobs`
- `PUT /manager/jobs/:id`
- `GET /manager/Jobs`
- `GET /manager/request`


Routes below need authentication & authorization posisiton Employe:

- `GET /employe/jobs`
- `POST /employe/jobs/:id`
- `GET /employe/request`


&nbsp;

## 1. POST /register

Request:

- body:
```json
{
  "name": "string",
  "password": "string",
  "position": "string",
  "email": "string",
  "phoneNumber": "string"
}
```

_Response (201 - Created)_
```json
{
    "name": "string",
    "password": "string",
    "position": "string",
    "email": "string",
    "phoneNumber": "string"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "name is required"
}
OR
{
  "message": "position is required"
}
OR
{
  "message": "phoneNumber is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_
```json
{
  "access_token": "string"
}
```


_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. Post /manager/jobs

Description:
- Create Jobs

Request:

- headers: 
```json
{
  "access_token": "string"
}
```

- body:
```json
{
  "name": "string",
  "description": "string",
  "dificulty": "string",
  "deadline": "string",
  "EmployeId": "string",
  "link": "string",
}
```

_Response (201 - OK)_
```json
{
    "name": "string",
    "description": "string",
    "dificulty": "eastringsy",
    "deadline": "date",
    "EmployeId": "number",
    "authorId": 4,
    "status": "string",
    "progress": 0,
    "link": "string",
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

_Response (400 - Bad request)_

```json
{
    "message": "Entity is require"
}
```

&nbsp;

## 4. PUT /manager/jobs/:id

Description:
- Edit Jobs

Request:

- params:
```json
{
  "id": "integer"
}
```

- headers: 
```json
{
  "access_token": "string"
}
```

- body:
```json
{
  "name": "string",
  "description": "string",
  "dificulty": "string",
  "deadline": "string",
  "EmployeId": "string",
  "link": "string",
}
```

_Response (201 - OK)_
```json
{
    "mesage": "Job Edited"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```



&nbsp;



## 5. Get /manager/jobs

Description:
- Fetch all job from database

Request:

- headers: 
```json
{
  "access_token": "string"
}
```


_Response (200 - OK)_
```json
[


]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```


&nbsp;



## 6. GET /manager/request

Description:
- Fetch all request from database

Request:

- headers: 
```json
{
  "access_token": "string"
}
```

- body:
```json
[





]
```

_Response (200 - OK)_
```json
[

  
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```


&nbsp;

## 7. Get /employe/jobs

Description:
- Fetch all job from database

Request:

- headers: 
```json
{
  "access_token": "string"
}
```


_Response (200 - OK)_
```json
[
   {
        "name": "string",
        "description": "string",
        "dificulty": "string",
        "deadline": "date",
        "EmployeId": "integer",
        "authorId": "integer",
        "status": "string",
        "progress": "integer",
        "link": "string",
    },
    {
        "name": "string",
        "description": "string",
        "dificulty": "string",
        "deadline": "date",
        "EmployeId": "integer",
        "authorId": "integer",
        "status": "string",
        "progress": "integer",
        "link": "string",
    }
    ,,,,

]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```


&nbsp;

## 8. POST /employe/jobs/id

Description:
- Create Request to edit Job

Request:

- headers: 
```json
{
  "access_token": "string"
}
```


_Response (201 - OK)_
```json
[
   

]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```


&nbsp;

## 9. GET /employe/request

Description:
- fetch Request to edit Job

Request:

- headers: 
```json
{
  "access_token": "string"
}
```


_Response (200 - OK)_
```json
[
   

]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```


&nbsp;




## Global Error

_Response (401 - Unauthorized)_
```json
{
  "message": "Invalid token"
}
```

_Response (403 - Forbidden)_
```json
{
  "message": "You are not authorized"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal server error"
}
```