import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout, Principal, Expedientes } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Principal />} />
        <Route path="/expedientes" element={<Expedientes />} />
      </Route>
    </Routes>
  );
}

export default App;
