import './App.css';
import Base from './components/Base';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

export default function App() {
  return (
      <Base>
        <Sidebar/>
        <Content></Content>
      </Base>
  );
}
