import { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ThemeProvider from "./contexts/ThemeProvider";
import CoreLayout from './Layouts/CoreLayout';
import MyBooks from './pages/MyBooks';
import WishList from './components/WishList/WishList';
import Dashboard from './pages/Dashboard';
import PageNotFound from './components/Error/PageNotFound';
import AddBook from './pages/AddBook';

const router = createBrowserRouter([
  {path: '/', element: <CoreLayout />, children: [
    {path: '', element: <Navigate to='/my-books'/>},
    {path: 'my-books', element: <MyBooks />, children: [
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
    <>
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  )
}

export default App
