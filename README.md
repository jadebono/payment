# `Stripe-Integrated Payment React App`

**Author:** Joseph Anthony Debono,  
**email:** [joe@jadebono.com](joe@jadebono.com)  
**Frontend:** [Localhost:3000](http:localhost:3000/)  
**Backend:** [Localhost:4000](http:localhost:4000/)  
**Date of commencement:** 4 February 2024  
**Date of completion:** 8 February 2024  
**License:** MIT

---

# Functionality

## `Implemented features`

1. Make a payment for a service by inputting name, surname, quantity;
1. Sends payment to server;
1. On server, payment data is turned into a transaction object that is saved in MongoDB;
1. Transaction object is also sent to a third-party Stripe-enabled page;
1. Receives success or failure response that redirect to a success/cancel pages on the frontend;
1. Retrieves a list of all transaction data from MongoDB;

---

# Frontend

This project was bootstrapped with:

[Create React App](https://github.com/facebook/create-react-app)  
[React Redux](https://react-redux.js.org/)  
[Redux Toolkit](https://redux-toolkit.js.org/)  
[Tailwind](https://tailwindcss.com/)

In the frontend/ directory, you can run:

```bash
npm start
```

This runs the app in development mode. The default port is 3000:
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

**Note**:

The the frontend expects to connect to a backend running on port 4000. If your backend is running on any other port, you will have to change the port in the relevant environmental variable in the .env files of BOTH the frontend and the backend.

## Available Scripts

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

---

# `Installing and running the Frontend`

installing and running the the frontend:

```bash
cd frontend
npm install
npm start
```

## `dependencies`

1. "@testing-library/jest-dom": "^5.17.0",
1. "@testing-library/react": "^13.4.0",
1. "@testing-library/user-event": "^13.5.0",
1. "axios": "^1.6.7",
1. "dotenv": "^16.4.1",
1. "react": "^18.2.0",
1. "react-dom": "^18.2.0",
1. "react-router-dom": "^6.22.0",
1. "react-scripts": "5.0.1",
1. "web-vitals": "^2.1.4"

## `Integrated Dependencies`

Tailwind comes integrated with this version of Create-React-App. Just add:

1. frontend/tailwind.config.js
1. frontend/src/index.css

contents of frontend/src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

# `Backend`

installing the backend

```bash
cd backend
npm install
```

**Note**:

The server on my localhost runs on port: 4000. If this is not available, you can choose any available port and update the environmental variable PORT

## `Running the Server`

In the backend/ directory, you can run:

```bash
node main.js
```

**IMPORTANT**

1. Most node variables are environment variables stored in the .env file.

## `dependencies`

1. "cors": "^2.8.5",
1. "dotenv": "^16.0.0",
1. "express": "^4.17.3",
1. "mongodb": "^4.4.0",
1. "stripe": "^14.15.0"

---

# `External Services`

## `MongoDB`

Database: ecom
Database name: payprocessor  
Collections: payments

---

# `A Note on Environmental Variables`

Environmental variables are disposable and do not constitute a secret. They have not been excluded so that they are available for easy testing. Users however are welcome to substitute them with their own.

---
