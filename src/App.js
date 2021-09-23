import { GlobalProvider } from './store/contexts/AppContext';
import { H1 } from './components/H1';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div>
        <H1 />
      </div>
    </GlobalProvider>
  );
}

export default App;
