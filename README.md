# Survery Application

### Getting Started

You need to copy the `.env.template` file to `.env` and fill in the required values.

## API Routes

The API is served by default at `http://localhost:${ENVS.PORT}`.

### Surveys

| Method | Endpoint                     | Description                                                |
| ------ | ---------------------------- | ---------------------------------------------------------- |
| `GET`  | `/api/surveys`               | Get all surveys.                                           |
| `GET`  | `/api/surveys/:id`           | Get a survey by its ID.                                    |
| `GET`  | `/api/surveys/questions/:id` | Get the questions for a survey.                            |
| `POST` | `/api/surveys/create`        | Create a survey. Currently returns a placeholder response. |
| `POST` | `/api/surveys/submit`        | Submit a survey. Currently returns a placeholder response. |

Examples:

```text
GET /api/surveys
GET /api/surveys/1
GET /api/surveys/questions/1
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