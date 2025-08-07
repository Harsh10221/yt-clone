import React, { useState, useEffect, useRef } from 'react';

function ErrorMsg() {
  const [name, setName] = useState('');
  
  // 1. Create a ref to store the render count, initialized to 0
  const renderCount = useRef(0);

  // 2. This useEffect hook runs after every single render
  useEffect(() => {
    // Increment the ref's .current property. This does NOT cause a re-render.
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input 
        type="text" 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Type here to re-render"
      />
      <p>My name is {name}</p>
      
      {/* 3. Display the current value of the ref */}
      <p>This component has rendered {renderCount.current} times.</p>
    </div>
  );
}

export default ErrorMsg;