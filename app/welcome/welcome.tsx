import React, { useState } from 'react';
import ColorNameInput from './ColorNameInput';

export function Welcome() {
  const [UIcolor, setUIColor] = useState<string>('');

  return (
    <div className="App">
      <div
        className="App_color_container"
        style={{ background: `${UIcolor}` }}
      ></div>
      <ColorNameInput setUIColor={setUIColor} />
    </div>
  );
}
