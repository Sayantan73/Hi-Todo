# Todo Application

This repository contains the frontend and backend code for a simple Todo application. The application allows users to create, view, and delete todo items.

## Features

- **Create Todos**: Users can add new todo items with a title and description.
- **View Todos**: Displays a list of todos fetched from the backend.
- **Delete Todos**: Users can delete specific todos from the list.
- **Error Handling**: Displays error messages if the backend API fails.
- **Loading State**: Shows a loading indicator when data is being fetched.

## Tech Stack

### Frontend
- **Framework**: React (with Vite)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Environment Variables**: Managed using `.env` files

### Backend
- **Framework**: Node.js with Express
- **Database**: MongoDB (via Mongoose)
- **Environment Variables**: Managed using `dotenv`

---

## Project Structure

### Frontend

The frontend code is located in the `frontend/` directory.

#### Key Files:
- `src/App.jsx`: Main React component containing the form, todos list, and handlers for CRUD operations.
- `.env`: Contains environment variables like the API base URL (`VITE_API_BASE_URL`).

### Backend

The backend code is located in the `backend/` directory.

#### Key Files:
- `server.js`: Entry point for the Express server.
- `routes/todoRoutes.js`: Defines API endpoints for handling todo-related requests (`GET`, `POST`, `DELETE`).
- `models/Todo.js`: Mongoose schema for Todo items.
- `.env`: Contains environment variables such as `MONGO_URI` and `PORT`.

---

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Vite](https://vitejs.dev/)
- [Render/Vercel/Netlify Account](https://render.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/Sayantan73/Hi-Todo.git
cd todo-app
