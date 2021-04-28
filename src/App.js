import React, { useState } from 'react';
import './App.css';

function App() {
  // Create Hooks
  const [old, setOld] = useState(0)
  const [mah, setMah] = useState(1500)
  const [osd, setOsd] = useState(1700)

  return (
    <div className="App">
      <div>
        <label>mAH in OSD</label>
        <input id="old" type="text" value={osd} onChange={(e) => setOsd(e.target.value)}></input>
      </div>

      <div>
        <label>mAH replaced</label>
        <input id="mah" type="text" value={mah} onChange={(e) => setMah(e.target.value)}></input>
      </div>

      <div>
        <label>Old scale</label>
        <input id="mah" type="text" value={old} onChange={(e) => setOld(e.target.value)}></input>
      </div>

      <label>New scale</label>
      <input id="new" disabled="true" type="text" value={osd / mah * old}></input>
    </div>
  );
}

export default App;
