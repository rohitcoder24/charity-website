import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Component/Home.jsx'
import Gall from './Component/Gall.jsx'
import Aboutus from './Component/Aboutus.jsx'
import Event from './Component/Event.jsx'
import Eventdeli from './Component/Eventdeli.jsx'
import Element from './Component/Element.jsx'
import Donation from './Component/Donation.jsx'
import Blog from './Component/Blog.jsx'
import Blogdetails from './Component/Blogdetails.jsx'
import Contect from './Component/Contect.jsx'
import 'aos/dist/aos.js'
import { Auth0Provider } from '@auth0/auth0-react'
const router1 = createBrowserRouter([
  {path:"/", element:<App/>,children:[
    {path:"/",element:<Home/>},
    {path:"/Home",element:<Home/>},
    {path:"/Gall",element:<Gall/>},
    {path:"/About",element:<Aboutus/>},
    {path:"/Event",element:<Event/>},
    {path:"/Eventdeli",element:<Eventdeli/>},
    {path:"/Element",element:<Element/>},
    {path:"/Donation",element:<Donation/>},
    {path:"/Blog",element:<Blog/>},
    {path:"/Blog-Details",element:<Blogdetails/>},
    {path:"/Contect",element:<Contect/>},

  ]}
])

 ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-p8l3sanyxi2b1dhw.us.auth0.com"
    clientId="oaW5n8Tw35c2bFETP0nypEPkVHmMkDbB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
   <RouterProvider router={router1}>

</RouterProvider>
  </Auth0Provider>,

 

)
