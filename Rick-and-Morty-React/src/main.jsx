import React from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router  from './router.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

