import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog"
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
import Service from "../../Pages/Service/Service";
import Signup from "../../Pages/Signup/Signup";
import Views from "../../Pages/Views/Views";

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
          path: '/review/:id',
          elememnt: <Review></Review>,
          loader: ({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'/views',
          element: <Views></Views>
        },
       
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/service',
          element:<Service></Service>
        }
      ]
    }
  
  ]);
  export default router;