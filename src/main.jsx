import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import OrderLists from './components/OrderLists/OrderLists.jsx';
import { Helmet, HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }, 
      {
        path : "/products/:product_id",
        element:<ProductDetails></ProductDetails>,
        loader: ()=> fetch('/gadgetData.json'),
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/gadgetData.json')
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "orders",
        element: <OrderLists></OrderLists>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
     <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
    
  </StrictMode>,
)
