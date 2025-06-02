# DemoTest - React + Vite + JSON Server

This project is a React application bootstrapped with Vite, using TypeScript and SCSS for styling. It also uses [JSON Server](https://github.com/typicode/json-server) to mock API endpoints for development.

## Getting Started

### 1. Install dependencies

Make sure you have [Node.js](https://nodejs.org/) installed.

Install all required packages:

```sh
npm install
```

### 2. Start JSON Server

The mock API uses the [`db.json`](db.json) file at the root of the project.

To start JSON Server on port 3000:

```sh
npx json-server --watch db.json --port 3000
```

- The API will be available at [http://localhost:3000](http://localhost:3000)
- Example endpoints:
  - [http://localhost:3000/employeeList](http://localhost:3000/employeeList)
  - [http://localhost:3000/province](http://localhost:3000/province)

### 3. Start the React App

In a new terminal, run:

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- `src/` - Source code (components, pages, hooks, api, etc.)
- `db.json` - Mock database for JSON Server
- `public/` - Static assets

## Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint

## Notes

- Make sure JSON Server is running before using the app, or API requests will fail.
- You can edit `db.json` to change the mock data.