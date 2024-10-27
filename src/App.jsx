import { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ThemeProvider from "./contexts/ThemeProvider";
import CoreLayout from './Layouts/CoreLayout';
import MyBooks from './components/MyBooks/MyBooks';
import WishList from './components/WishList/WishList';
import Dashboard from './components/Dashboard/Dashboard';
import PageNotFound from './components/Error/PageNotFound';

const router = createBrowserRouter([
  {path: '/', element: <CoreLayout />, children: [
    {path: '', element: <Navigate to='/my-books'/>},
    {path: 'my-books', element: <MyBooks />},
    {path: 'wishlist', element: <WishList />},
    {path: 'dashboard', element: <Dashboard />},
  ], errorElement: <PageNotFound />}
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
