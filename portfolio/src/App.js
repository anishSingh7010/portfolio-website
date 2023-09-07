import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage';
import NavBar from './Components/Navigation/Navbar';

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
  ]);

  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
