# Database Schema Documentation

This project uses **MongoDB** with **Mongoose** for data modeling. Below is the structure of the `Profiles` collection used in the "Me-API Playground".

## Collection: `Profiles`

| Field       | Type   | Required | Description                                            |
| :---------- | :----- | :------- | :----------------------------------------------------- |
| `name`      | String | Yes      | Candidate's full name                                  |
| `email`     | String | Yes      | Candidate's email address                              |
| `education` | String | No       | Educational background details                         |
| `skills`    | Array  | No       | List of technical strings (e.g., ["React", "Node.js"]) |
| `projects`  | Array  | No       | Array of objects containing project details            |
| `work`      | Array  | No       | List of work experience strings                        |
| `links`     | Object | No       | Nested object for social & portfolio URLs              |

### Nested Objects Detail

#### 1. Projects Array

Each object in the `projects` array contains:

- `title`: String
- `description`: String
- `links`: Object { `github`: String, `live`: String }

#### 2. Links Object

- `github`: String
- `linkedin`: String
- `portfolio`: String

## Indexes

- No specific manual indexes added; MongoDB default `_id` index is used.
