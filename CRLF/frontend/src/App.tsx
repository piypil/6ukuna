import React from 'react';
import {Homevuln} from './components/Homevuln'
import {ScanResult} from './data/ScanResult'

function App() {
  return (
    <div className="text-3xl font-bold underline">
      <Homevuln Scanresult = { ScanResult }/>
    </div>
  );
}

export default App;
