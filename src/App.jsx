import { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import CoreLayout from './Layouts/CoreLayout';
import MyBooks from './pages/MyBooks';
import Wishlist from './pages/Wishlist';
import Dashboard from './pages/Dashboard';
import PageNotFound from './components/Error/PageNotFound';
import BookDetailsPage from './pages/BookDetailsPage';
import MyBooksLayout from './Layouts/MyBooksLayout';
import { NextUIProvider, useSelect } from "@nextui-org/react";
import FormDataContext from './contexts/FormDataContext';
import WishlistLayout from './Layouts/WishlistLayout';
import { useFetchBooks } from './hooks/useFetchBooks';

//for updating the store state
import { useDispatch, useSelector } from 'react-redux';
import { updateBooks, updateIsError, updateIsPending } from './store/books/booksSlice';

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
  ], errorElement: <CoreLayout><PageNotFound /></CoreLayout>}
]);

function App() {
  
  /* Main book fetching */
  const { data, isError, isPending } = useFetchBooks();
  const dispatch = useDispatch();
  const books = data?.books;

  useEffect(() => {
    document.body.style.overflowX = 'hidden'
    dispatch(updateBooks({ books }));
  }, [books]);

  useEffect(() => {
    dispatch(updateIsPending({ isPending }));
  }, [isPending]);

  useEffect(() => {
    dispatch(updateIsError({ isError }));
  }, [isError]);
  
  return (
    <NextUIProvider>
      <FormDataContext>
        <RouterProvider router={router}/>
      </FormDataContext>
    </NextUIProvider>
  )
};

export default App
