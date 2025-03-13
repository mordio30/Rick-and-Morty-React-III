import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'
import ContactPage from '../pages/ContactPage'
import App from './App';
import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from '../pages/NotFoundPage';
import ErrorPage from '../pages/ErrorPage';
import CharactersPage from '../pages/CharactersPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index:true,
          element:<HomePage />
        },
        {
          path:"/about/",
          element:<AboutPage />
        },
        {
          path:"/contact/",
          element:<ContactPage />
        },
        {
            path:"/characters/",
            element:<CharactersPage />
        },
        {
          path:"*",
          element:<NotFoundPage />
        }
      ],
      errorElement: <ErrorPage />
    },
  ]);
  
export default router;