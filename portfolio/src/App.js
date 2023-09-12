import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './Components/Navigation/Navbar';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

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
  ]);

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
