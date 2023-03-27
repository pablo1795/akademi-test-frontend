import './App.css';

// React Router V6
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Layouts
import NavBar from './app/components/NavBar';

// Pages
import homeRoutes from './app/routes/homeRoutes';
import employeeRoutes from './app/routes/employeeRoutes';
import assetRoutes from './app/routes/assetRoutes';

import ErrorPage from './app/pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between min-h-screen'>
        <NavBar />
        <main className="p-4 md:px-64 bg-blue-500 h-screen">
          <Routes>
            {homeRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}

            {employeeRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}

            {assetRoutes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}

            <Route path='/*' element={<ErrorPage />} />
          </Routes>
        </main>
        <footer className="bg-stone-800 text-white text-center p-4">
          <address>copyright@Pablo F. Diaz</address>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
