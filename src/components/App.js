import React, { useState } from 'react';

const ButtonCounter = () => {
  // Initialize state with useState hook
  const [count, setCount] = useState(0);

  // Event handler to increment counter
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      {/* Display the count dynamically */}
      <p>Button clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ButtonCounter;
