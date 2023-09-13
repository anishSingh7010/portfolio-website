import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './Components/Navigation/Navbar';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import About from './pages/About';
import Error404 from './Components/Error/Error404';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <Homepage />
        </>
      ),
    },
    {
      path: '/resume',
      element: (
        <>
          <NavBar />
          <Resume />
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
          <NavBar />
          <Contact />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <NavBar />
          <About />
        </>
      ),
    },
    {
      path: '*',
      element: (
        <>
          <NavBar />
          <Error404 />
        </>
      ),
    },
  ]);

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
