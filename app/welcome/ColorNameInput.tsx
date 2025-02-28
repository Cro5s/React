import React, { useState } from 'react';

interface ChildComponentProps {
  setUIColor: React.Dispatch<React.SetStateAction<string>>;
}

const ColorNameInput: React.FC<ChildComponentProps> = ({ setUIColor }) => {
  const [activeColor, setActiveColor] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setActiveColor(value);
    setUIColor(value);
  };

  return (
    <input
      type="text"
      id="input"
      aria-label="input"
      onChange={handleChange}
      value={activeColor}
    />
  );
};

export default ColorNameInput;
