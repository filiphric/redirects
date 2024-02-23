import React, { Component, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import PageA from './pageA.tsx';
import PageB from './pageB.tsx';
import PageC from './pageC.tsx';
import PageD from './pageD.tsx';

const Redirect = ({ path, component }: { path: string, component: JSX.Element }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(path);
  }, [navigate]);

  return component; 
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/a",
    element: <Redirect path="/b" component={<PageA />}/>
  },
  {
    path: "/b",
    element: <Redirect path="/c" component={<PageB />}/>
  },
  {
    path: "/c",
    element: <Redirect path="/d" component={<PageC />}/>
  },
  {
    path: "/d",
    element: <PageD />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
