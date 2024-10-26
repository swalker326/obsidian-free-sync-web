import { useState } from 'react';
import reactLogo from './assets/react.svg';
import funnyCat from './assets/funny-cat.webp';
import loop from './assets/loop.mp4';
import { Button } from '@/src/components/ui/button';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-600">
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
        <video
          loop
          muted
          autoPlay
          style={{ width: '500px', border: '1px solid red' }}
          src={loop}
        />
      </div>
    </div>
  );
}

export default App;
