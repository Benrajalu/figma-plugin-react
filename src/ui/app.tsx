import { useState } from 'react';

import ReactLogo from '@ui/assets/react.svg?component';
import viteLogo from '@ui/assets/vite.svg?url';
import figmaLogo from '@ui/assets/figma.png';

import * as CreateRectangles from '@common/createRectangles';
import * as RemoteCall from '@common/remoteCall';

import { Button } from '@ui/components/Button';
import '@ui/styles/main.scss';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="homepage">
      <div>
        <a href="https://www.figma.com" target="_blank">
          <img src={figmaLogo} className="logo figma" alt="Figma logo" />
        </a>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <ReactLogo className="logo react" title="React logo" />
        </a>
      </div>

      <h1>Figma + Vite + React</h1>

      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        <Button onClick={async () => RemoteCall.outbound()} style={{ marginInlineStart: 10 }}>
          do HTTP call
        </Button>
        <Button onClick={() => CreateRectangles.outbound({ count: 5 })} style={{ marginInlineStart: 10 }}>
          create rectangles
        </Button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more <br />
      </p>
    </div>
  );
}

export default App;
