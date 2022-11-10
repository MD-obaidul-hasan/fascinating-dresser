import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog"
import Home from "../../Pages/Home/Home/Home";
import Service from "../../Pages/Home/Services/Service";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import Review from "../../Pages/Review/Review";
// import Service from "../../Pages/Service/Service";
import Signup from "../../Pages/Signup/Signup";
import ViewDetals from "../../Pages/ViewDetals/ViewDetals";
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
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    }
  
  ]);
  export default router;