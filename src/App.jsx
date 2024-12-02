import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
import AuthPage from './pages/AuthPage.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Protected from './pages/Protected.jsx';
import StartingPage from './pages/StartingPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
  {path: '/', element: <StartingPage />, errorElement: <NotFoundPage />},
  {path: '/library', element: <Protected><CoreLayout /></Protected>, children: [
    {path: 'my-books', element: <MyBooksLayout />,  
      children: [
      {path: '', element: <MyBooks />},
      {path: ':id', element: <BookDetailsPage />},
    ]},
    {path: 'wishlist', element: 
        <WishlistLayout />,
      children: [
      {path: '', element: <Wishlist />},
      {path: ':id', element: <BookDetailsPage />},
    ]},
    {path: 'dashboard', element: <Dashboard />},
    {path: 'profile', element: <Profile />},
  ], errorElement: <CoreLayout><PageNotFound /></CoreLayout>},
  {path: '/auth', element: <AuthPage />}
]);

function App() {

  useEffect(() => {
    document.body.style.overflowX = 'hidden'
  }, []);

  return (
    <NextUIProvider>
      <FormDataContext>
        <div className='min-w-full min-h-screen'>
          <RouterProvider router={router}/>
        </div>
      </FormDataContext>
    </NextUIProvider>
  )
};

export default App
