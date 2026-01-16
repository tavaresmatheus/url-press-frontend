import { Route, Routes, useLocation } from 'react-router';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Panel from './pages/Panel';

export default function App() {
  const location = useLocation()
  const showNavbar = location.pathname !== '/login'
  const publicNavItems = [
    { label: 'Home', to: '/' },
    { label: 'Login', to: '/login' },
  ]
  const panelNavItems = [
    { label: 'Home', to: '/' },
    { label: 'My URL\'s', to: '/press' },
    { label: 'Me', to: '/me' },
  ]
  const navItems =
    location.pathname === '/panel'
    ? panelNavItems
    : publicNavItems

  return (
    <>
      <div className="p-10">
        {showNavbar && <Navbar items={navItems} />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panel" element={<Panel />} />
        </Routes>
      </div>
    </>
  )
}
