

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Course from './components/Course';
import ErrorPage from './components/ErrorPage';
import Gallery from './components/Gallery';
import Signup from './components/Signup';
import Footer from './components/Footer';
import News from './components/News';

const router = createBrowserRouter(
  [
    {
      path: '/', 
      element:<div><Navbar/><Home/><Footer/></div>,
    },

    {
      path:'/about',
      element:<div><Navbar/><About/></div>,
      children:[
      {path:'course',element:<Course/>}
      ]
    },
    {
      path:'/contact', 
      element:<div><Navbar/><Contact/></div>
    },
    {
      path:'/gallery', 
      element:<div><Navbar/><Gallery/></div>
    },
    {
      path:'/signup', 
      element:<div><Navbar/><Signup/></div>
    },
    {
      path:'*',
      element:<ErrorPage/>
    },
    {
      path: '/news', 
      element:<div><Navbar/><News/><Footer/></div>,
    },

  ]
);
function App() {
  return(
    <div className="bg-slate-700">
      <RouterProvider router={router}/>
    </div>
  )
  
}

export default App
