import { useState } from 'react';
import reactLogo from './assets/react.svg';
import { Button } from '@/src/components/ui/button';
import funnyCat from './assets/funny-cat.webp';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-[100vh] p-0 m-0">
      <Button>Click Me</Button>
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rspack + React + TypeScript</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '3rem',
          alignItems: 'center',
        }}
      >
        <img alt="funny-cat" style={{ width: '200px' }} src={funnyCat} />
      </div>
    </div>
  );
}

export default App;
