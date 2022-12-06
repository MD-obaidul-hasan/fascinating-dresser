import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog"
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Services/Service";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Oderview from "../../Pages/Oderview/Oderview";
import Review from "../../Pages/Review/Review";
// import Service from "../../Pages/Service/Service";
import Signup from "../../Pages/Signup/Signup";
import ViewDetals from "../../Pages/ViewDetals/ViewDetals";


const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element:<Login></Login>
        },
        {
            path: '/signup',
            element:<Signup></Signup>
        },
        
        
       
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/service',
          element:<Service></Service>
        },
        {
          path:'/viewdetals/:id',
          element:<ViewDetals></ViewDetals>,
          loader: ({params}) => fetch(`https://fascinating-dresser-server-md-obaidul-hasan.vercel.app/services/${params.id}`)
        },
        {
          path:'/oderview',
          element:<Oderview></Oderview>
        }
      ]
    }
  
  ]);
  export default router;