import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Main from './Layout/Main';
import Home from './components/Home'
import Registration from './components/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Order from './components/Order';


const router = createBrowserRouter([{
  path:'/',
  element:<Main></Main>,
  children:[
    {
      path:'/',
      element:<Login></Login>
    },
    {
      path:'/home',
      element:<Home></Home>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/register',
      element:<Registration></Registration>
    },
    {
      path:'/order',
      element:
      <PrivateRoute>
        <Order></Order>
      </PrivateRoute>
    },
  ]

}])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
