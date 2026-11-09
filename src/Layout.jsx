import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = ({ isCollapsed, toggleSidebar }) => (
  <div className="flex min-h-screen">
    <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
    <main className="flex-1 bg-white">
      <Outlet />
    </main>
  </div>
);

export default Layout;
