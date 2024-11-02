import { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ThemeProvider from "./contexts/ThemeProvider";
import CoreLayout from './Layouts/CoreLayout';
import MyBooks from './pages/MyBooks';
import WishList from './components/WishList/WishList';
import Dashboard from './pages/Dashboard';
import PageNotFound from './components/Error/PageNotFound';
import AddBook from './pages/AddBook';
import BookDetailsPage from './pages/BookDetailsPage';
import MyBooksLayout from './Layouts/MyBooksLayout';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './http/http';

const router = createBrowserRouter([
  {path: '/', element: <CoreLayout />, children: [
    {path: '', element: <Navigate to='/my-books'/>},
    {path: 'my-books', element: <MyBooksLayout />, children: [
      {path: '', element: <MyBooks />},
      {path: 'book/:id', element: <BookDetailsPage />},
      {path: 'add-book', element: <AddBook />}
    ]},
    {path: 'wishlist', element: <WishList />},
    {path: 'dashboard', element: <Dashboard />},
  ], errorElement: <CoreLayout><PageNotFound /></CoreLayout>}
])

function App() {

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
  })
  
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
