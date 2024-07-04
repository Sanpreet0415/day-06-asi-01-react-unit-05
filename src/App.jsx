import React, { useRef } from 'react';
import './App.css';

// Component 1: Focusable Input Field
const FocusableInput = () => {
  const inputRef = useRef(null);

  // Function to focus the input field when the component mounts
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Automatically focus the input when the component mounts
  React.useEffect(() => {
    focusInput();
  }, []);

  return (
    <div>
      <h2>Focusable Input Field</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." />
    </div>
  );
};

// Component 2: Managing Uncontrolled Components
const UncontrolledInput = () => {
  const inputRef = useRef(null);

  // Function to handle input change
  const handleChange = () => {
    console.log('Current value:', inputRef.current.value);
  };

  return (
    <div>
      <h2>Managing Uncontrolled Components</h2>
      <input ref={inputRef} type="text" placeholder="Type here..." onChange={handleChange} />
    </div>
  );
};

// Component 3: Interacting with DOM Elements
const ChangeColorOnClick = () => {
  const divRef = useRef(null);

  // Function to change background color on click
  const changeColor = () => {
    const newColor = getRandomColor();
    divRef.current.style.backgroundColor = newColor;
  };

  // Helper function to generate random color
  const getRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  return (
    <div>
      <h2>Interacting with DOM Elements</h2>
      <div ref={divRef} className="color-div" onClick={changeColor}>
        Click me to change color
      </div>
    </div>
  );
};

// Main App component
function App() {
  return (
    <div className="App">
      <h1>React useRef Hook Examples</h1>
      <FocusableInput />
      <hr />
      <UncontrolledInput />
      <hr />
      <ChangeColorOnClick />
    </div>
  );
}

export default App;
