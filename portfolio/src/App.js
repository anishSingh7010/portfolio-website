import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import NavBar from './Components/Navigation/Navbar';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import About from './pages/About';
import Error404 from './Components/Error/Error404';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './Components/Footer/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <NavBar />
          <Homepage />
          <Footer />
        </>
      ),
    },
    {
      path: '/resume',
      element: (
        <>
          <NavBar />
          <Resume />
          <Footer />
        </>
      ),
    },
    {
      path: '/contact',
      element: (
        <>
          <NavBar />
          <Contact />
          <Footer />
        </>
      ),
    },
    {
      path: '/about',
      element: (
        <>
          <NavBar />
          <About />
          <Footer />
        </>
      ),
    },
    {
      path: '/projects',
      element: (
        <>
          <NavBar />
          <ProjectsPage />
          <Footer />
        </>
      ),
    },
    {
      path: '*',
      element: (
        <>
          <NavBar />
          <Error404 />
          <Footer />
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
