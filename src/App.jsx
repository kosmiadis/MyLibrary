import { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import CoreLayout from './Layouts/CoreLayout';
import MyBooks from './pages/MyBooks';
import Wishlist from './pages/Wishlist';
import Dashboard from './pages/Dashboard';
import PageNotFound from './components/Error/PageNotFound';
import BookDetailsPage from './pages/BookDetailsPage';
import MyBooksLayout from './Layouts/MyBooksLayout';
import { NextUIProvider } from "@nextui-org/react";
import FormDataContext from './contexts/FormDataContext';
import WishlistLayout from './Layouts/WishlistLayout';
import Profile from './pages/Profile';

//for updating the store state


import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthenticateUser } from './hooks/auth/useAuthenticateUser';

const router = createBrowserRouter([
  {path: '/', element: <CoreLayout />, children: [
    {path: '', element: <Navigate to='/my-books'/>},
    {path: 'my-books', element: <MyBooksLayout />, children: [
      {path: '', element: <MyBooks />},
      {path: ':id', element: <BookDetailsPage />},
    ]},
    {path: 'wishlist', element: <WishlistLayout />, children: [
      {path: '', element: <Wishlist />},
      {path: ':id', element: <BookDetailsPage />},
    ]},
    {path: 'dashboard', element: <Dashboard />},
    {path: 'profile', element: <Profile />},
  ], errorElement: <CoreLayout><PageNotFound /></CoreLayout>},
  {path: 'login', element: <Login />},
  {path: 'signup', element: <Signup />},
  
]);

function App() {
  
  useEffect(() => {
    document.body.style.overflowX = 'hidden'
  }, []);

  return (
    <NextUIProvider>
      <FormDataContext>
        <RouterProvider router={router}/>
      </FormDataContext>
    </NextUIProvider>
  )
};

export default App
