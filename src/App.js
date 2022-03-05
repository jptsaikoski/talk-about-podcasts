import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Base from './components/Base';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import DiscoverPage from "./pages/discover";
import SearchPage from "./pages/search";
import LibraryPage from "./pages/library";
import SettingsPage from "./pages/settings";

export default function App() {
  return (
      <Base>
        <Sidebar/>
        <Content>
          <Routes>
            <Route path="/" element={<DiscoverPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Routes>
        </Content>
      </Base>
  );
}
