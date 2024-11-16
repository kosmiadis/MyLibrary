import { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import CoreLayout from './Layouts/CoreLayout';
import MyBooks from './pages/MyBooks';
import WishList from './pages/Wishlist';
import Dashboard from './pages/Dashboard';
import PageNotFound from './components/Error/PageNotFound';
import BookDetailsPage from './pages/BookDetailsPage';
import MyBooksLayout from './Layouts/MyBooksLayout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './http/http';
import { NextUIProvider } from "@nextui-org/react";
import BooksContext from '../contexts/BooksContext';

const router = createBrowserRouter([
  {path: '/', element: <CoreLayout />, children: [
    {path: '', element: <Navigate to='/my-books'/>},
    {path: 'my-books', element: <MyBooksLayout />, children: [
      {path: '', element: <MyBooks />},
      {path: ':id', element: <BookDetailsPage />},
    ]},
    {path: 'wishlist', element: <WishList />},
    {path: 'dashboard', element: <Dashboard />},
  ], errorElement: <CoreLayout><PageNotFound /></CoreLayout>}
]);

function App() {

  useEffect(() => {
    document.body.style.overflowX = 'hidden'
  })
  
  return (
    <QueryClientProvider client={queryClient}>
        <BooksContext>
          <NextUIProvider>
            <RouterProvider router={router}/>
          </NextUIProvider>
        </BooksContext>
    </QueryClientProvider>
  )
}

export default App
