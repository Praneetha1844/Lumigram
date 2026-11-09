import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import ExplorePage from './ExplorePage';
import ReelsPage from './ReelsPage';
import Layout from './Layout';

function Main() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => setIsCollapsed((prev) => !prev);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />}>
          <Route index element={<App />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="reels" element={<ReelsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
