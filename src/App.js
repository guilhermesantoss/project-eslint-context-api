import { Routes } from './routes';
import { TitleProvider } from './contexts/TitleProvider';
import { PostsProvider } from './contexts/PostsProvider';

import './App.css';

function App() {
  return (
    <TitleProvider>
      <PostsProvider>
        <Routes />
      </PostsProvider>
    </TitleProvider>
  );
}

export default App;
