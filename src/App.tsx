import { Route, Routes, useLocation } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';

export default function App() {
  const location = useLocation()
  const showNavbar = location.pathname !== '/login'
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Login', to: '/login' },
  ]

  return (
    <>
      <div className="p-10">
        {showNavbar && <Navbar items={navItems} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}
