import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'animate.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Layout/RootLayout';
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Providers/AuthProvider';
import Login from './components/Login';
import Register from './components/Register';
import PrivateRoute from './Routes/PrivateRoute';
import AddMovie from './components/AddMovie';
import MyFavorites from './components/MyFavorites';
import Home from './Layout/Home';
import MovieDetails from './components/MovieDetails';
import AllMovies from './components/AllMovies';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement:<ErrorPage></ErrorPage>,    
    children:[
      {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('https://movie-news-server.vercel.app/addmovie'),
    },
      {
      path:'/login',
      element:<Login></Login>
    },
      {
      path:'/register',
      element:<Register></Register>
    },
      {
      path:'/moviedetails/:id',
      element:<MovieDetails></MovieDetails>,
      loader:({params})=>fetch(`https://movie-news-server.vercel.app/moviedetails/${params.id}`)
    },
      {
      path:'/allmovies',
      element:<AllMovies></AllMovies>,
      loader:()=>fetch('https://movie-news-server.vercel.app/allmovies'),
    },
      {
      path:'/addmovie',
      element:<PrivateRoute>
        <AddMovie></AddMovie>
      </PrivateRoute>
    },
      {
      path:'/myfavorites',
      loader:()=>fetch('https://movie-news-server.vercel.app/moviedetails'),
      element:<PrivateRoute>
        <MyFavorites></MyFavorites>
      </PrivateRoute>
    },
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
        <ToastContainer />
        <RouterProvider router={router} />
      </AuthProvider>
  </StrictMode>,
)
