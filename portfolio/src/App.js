import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom';
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
          <ScrollRestoration />
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
          <ScrollRestoration />
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
          <ScrollRestoration />
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
          <ScrollRestoration />
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
          <ScrollRestoration />
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
          <ScrollRestoration />
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
