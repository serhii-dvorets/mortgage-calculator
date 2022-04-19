import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { Banks } from './components/Banks';
import { Calculator } from './components/Calculator';
import { Layout } from './components/Layout';

const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Banks />} />
          <Route path="calculator" element={<Calculator />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
