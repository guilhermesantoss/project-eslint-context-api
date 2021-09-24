import { Routes } from './routes';
import { GlobalProvider } from './store/contexts/GlobalContext';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}

export default App;
