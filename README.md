# Survery Application

### Getting Started

You need to copy the `.env.template` file to `.env` and fill in the required values.

## API Routes

The API is served by default at `http://localhost:${ENVS.PORT}`.

### Surveys

| Method | Endpoint                     | Description                                                |
| ------ | ---------------------------- | ---------------------------------------------------------- |
| `GET`  | `/api/survey`                 | Get all surveys.                |
| `GET`  | `/api/survey/:id`              | Get a survey by its ID.         |
| `GET`  | `/api/survey/questions/:id`    | Get the questions for a survey. |
| `POST` | `/api/survey/create/:authorId` | Create a survey.                |
| `POST` | `/api/survey/submit/:id`       | Submit a survey.                |

Examples:

```text
GET /api/survey
GET /api/survey/1
GET /api/survey/questions/1
```

If a survey does not exist, the `GET` endpoints that receive an ID return:

```json
{
  "message": "Survey not found"
}
```

### Authentication

| Method | Endpoint             | Description          |
| ------ | -------------------- | -------------------- |
| `POST` | `/api/auth/login`    | Authenticate a user. |
| `POST` | `/api/auth/register` | Register a new user. |

Login request body:

```json
{
  "email": "user@example.com",
  "password": "password"
}
```

Register request body:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password"
}
```

The data is stored in a MongoDB database, and the password is hashed before being saved. The login endpoint checks the provided credentials against the stored data and returns a success message if they match.