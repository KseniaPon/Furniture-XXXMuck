import React from 'react'
import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { Header } from './components/Header';
import './global.css';
import { RouterProvider, createBrowserRouter, Outlet  } from 'react-router-dom';

const App = () => (
  <>
  <Header />
  <Outlet />
  </>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/product/:id',
        element: < ProductPage/>,
      }
    ]
  },
]);


createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);

// createRoot(document.querySelector('#app')).render(<HomePage/>)